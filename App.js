import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './Navigator';
import VinylManager from './VinylManager';
import { SQLiteProvider } from 'expo-sqlite';
import CategoryManager from './CategoryManager';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Monoton': require('./assets/Fonts/Monoton-Regular.ttf'),
    'Fredoka': require('./assets/Fonts/Fredoka.ttf')
  });

  if (!fontsLoaded) {
    return 
    (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Caricamento font...</Text>
    </View>
    );
  }

  return (
    <SQLiteProvider 
      databaseName='vinyls.db'
      onInit={async (db) => {
          await db.execAsync(`
            DROP TABLE IF EXISTS vinyls; 
            DROP TABLE IF EXISTS category;
            CREATE TABLE IF NOT EXISTS vinyls (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT NOT NULL,
                  artist TEXT,
                  label TEXT,
                  year INTEGER,
                  genre TEXT,
                  image TEXT,
                  condition TEXT,
                  isFavourite INTEGER DEFAULT 0
              );`
          );
          await db.execAsync(`
              CREATE TABLE IF NOT EXISTS category (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  genre TEXT 
              );`
          );
          await db.execAsync(`
              INSERT INTO category (genre) VALUES ('JAZZ'), ('HIP HOP'), ('ROCK'), ('COUNTRY'), ('POP');`
          );
          const categoryInfo = await db.getAllAsync('PRAGMA table_info(category)');
          const vinylsInfo = await db.getAllAsync('PRAGMA table_info(vinyls)');
          console.log("📊 Schema category:", categoryInfo);
          console.log("📀 Schema vinyls:", vinylsInfo);
      }}
      options={{useNewConnection: false}}
    >
      <CategoryManager>
        <VinylManager >
          <AppNavigator/>
        </VinylManager>
      </CategoryManager>
    </SQLiteProvider>

  );
}


