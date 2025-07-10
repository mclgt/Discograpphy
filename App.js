import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './Navigator';
import VinylManager from './VinylManager';
import { SQLiteProvider } from 'expo-sqlite';
import CategoryManager from './CategoryManager';
import styles from './styles/Style.js'


export default function App() {
  const [fontsLoaded] = useFonts({
    'Monoton': require('./assets/Fonts/Monoton-Regular.ttf'),
    'Fredoka': require('./assets/Fonts/Fredoka.ttf'),
    'FredokaMedium': require('./assets/Fonts/FredokaMedium.ttf')
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
          await db.execAsync('DROP TABLE IF EXISTS vinyls;');
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
              `DROP TABLE IF EXISTS category;`
          );
          await db.execAsync(
              `CREATE TABLE IF NOT EXISTS category (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  genre TEXT NOT NULL UNIQUE,
                  vinylNumber INTEGER DEFAULT 0
              );`
          );
          const tableInfo = await db.getAllAsync("PRAGMA table_info(category);");
          console.log("📊 Schema category:", tableInfo);
          const categories = [
          "JAZZ","HIP HOP","ROCK","COUNTRY","POP","BLACK METAL","DISCO MUSIC","ELETTRONICA","FOLK MUSIC","FUNK","BLUES","HARD ROCK"
          ];
        console.log("Inserting categories:", categories);
        for (const newgenre of categories){
          if (newgenre && newgenre.trim() !== "") {
            console.log("Inserting genre:", newgenre);
            await db.runAsync(
                'INSERT INTO category (genre) VALUES (?)', [newgenre.trim()]
            )
          }
        }
      } catch (error) {
        console.error("SQLite Init Error:", error);
      }
    }
  }options={{useNewConnection: false}}
  >
    
    <CategoryManager >
      <VinylManager>
         <AppNavigator/>
      </VinylManager>
    </CategoryManager>
  </SQLiteProvider>

  );
}


