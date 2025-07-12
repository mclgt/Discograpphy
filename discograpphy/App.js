import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './Navigator';
import VinylManager from './vinyl/VinylManager.js';
import { SQLiteProvider } from 'expo-sqlite';
import CategoryManager from './category/CategoryManager.js';
import {OrientationProvider } from './orientation/OrientationContext.js';  
import styles from '../styles/Style.js'


export default function App() {
  const [fontsLoaded] = useFonts({
    'Monoton': require('../assets/Fonts/Monoton-Regular.ttf'),
    'Fredoka': require('../assets/Fonts/Fredoka.ttf'),
    'FredokaMedium': require('../assets/Fonts/FredokaMedium.ttf'),
    'FredokaSemiBold': require('../assets/Fonts/FredokaSemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.minorTitle}>Loading fonts...</Text>
    </View>
    );
  }

  return (
    <SQLiteProvider 
      databaseName='vinyls.db'
      onInit={async (db) => {
        try{
          await db.execAsync( 'PRAGMA journal_mode= WAL;');
          await db.execAsync(
            `CREATE TABLE IF NOT EXISTS vinyls (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT NOT NULL,
                  artist TEXT,
                  label TEXT,
                  year INTEGER,
                  category_id INTEGER,
                  image TEXT,
                  condition TEXT,
                  isFavourite INTEGER DEFAULT 0,
                  dateAdded TEXT DEFAULT (DATE('now')),
                  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL ON UPDATE CASCADE
              );

          `);
          await db.execAsync(
              `CREATE TABLE IF NOT EXISTS category (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  genre TEXT NOT NULL UNIQUE,
                  vinylNumber INTEGER DEFAULT 0
              );`

            );
        const categories = [
          "JAZZ","HIP HOP","ROCK","COUNTRY","POP","BLACK METAL","DISCO MUSIC","ELECTRONIC","FOLK MUSIC","FUNK","BLUES","HARD ROCK"
          ];
       
        for (const newgenre of categories){
          if (newgenre && newgenre.trim() !== "") {
            console.log("Inserting genre:", newgenre);
            await db.runAsync(
                'INSERT OR IGNORE INTO category (genre) VALUES (?)', [newgenre.trim()]
            )
          }
        }
        await db.execAsync(
          `CREATE TRIGGER IF NOT EXISTS uploadNumVinyls
          AFTER UPDATE OF category_id ON vinyls
          FOR EACH ROW
          WHEN OLD.category_id IS NOT NULL AND OLD.category_id<>NEW.category_id
          BEGIN
              UPDATE category set vinylNumber = vinylNumber+1 where id = NEW.category_id;
              UPDATE category set vinylNumber = vinylNumber-1 where id = OLD.category_id;
          END;`
        )
        await db.execAsync(
          `CREATE TRIGGER IF NOT EXISTS updateCategory
          BEFORE DELETE ON vinyls
          FOR EACH ROW
          BEGIN
              UPDATE category set vinylNumber = vinylNumber-1 where id = OLD.category_id;
          END;`
        )
      } catch (error) {
        console.error("SQLite Init Error:", error);
      }
  }} options={{useNewConnection: false}}
  >
    <OrientationProvider>
      <CategoryManager >
        <VinylManager>
          <AppNavigator/>
        </VinylManager>
      </CategoryManager>
    </OrientationProvider>
  </SQLiteProvider>


  );
}


