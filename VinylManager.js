import React, {createContext,useState,useEffect} from 'react'; 
import Vinyl from './Vinyl';
import { useSQLiteContext } from 'expo-sqlite';
import { Alert } from 'react-native';

export const VinylContext = createContext(); 

export const VinylManager = ({children}) =>{
    const [vinyls, setVinyls] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [vCount, setVCount] = useState(0);
    const db = useSQLiteContext();

    const uploadVinyls = async () =>{
        try{
            const results = await db.getAllAsync(
                'SELECT * FROM vinyls ORDER BY id DESC'
            );
            setVinyls(results); 
        }catch(error){
            console.error("Database error",error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        if(db){
            uploadVinyls()
        } else if (!db){
            console.warn("Database not initialized");
        }
    },[db])

    const addVinyl = async (newVinyl) => {
       try{
            await db.runAsync(
                'INSERT INTO vinyls (title, artist, label, year, genre, image, condition, isFavourite) VALUES (?, ?, ?, ?, ?, ?, ? ,?)',
                [newVinyl.title, newVinyl.artist, newVinyl.label, parseInt(newVinyl.year), newVinyl.genre, newVinyl.image, newVinyl.condition, newVinyl.isFavourite]
            )
            Alert.alert("Vinyl added successfully!");
            uploadVinyls(); 
            setVCount(vCount+1);
        }catch (error){
            console.error(error); 
            Alert.alert("Error adding vinyl", "Please try again later.");
        }
    };

    const removeVinyl = async (id) => {
       try{
            await db.runAsync(
                'DELETE FROM vinyls WHERE id = ?',
                [id]
            )
            Alert.alert("Vinyl removed successfully!");
            uploadVinyls(); 
            setVCount(vCount-1);
        }catch (error){
            console.error(error); 
            Alert.alert("Error removing vinyl", "Please try again later.");
        };
    };

    const setVinyl = async (updatedVinyl) => {
        try{
            await db.runAsync(
                'UPDATE vinyls SET title = ?, artist = ?, label = ?, year = ?, genre = ?, image = ?, condition = ?, isFavourite = ? WHERE id = ?',
                [updatedVinyl.title, updatedVinyl.artist, updatedVinyl.label, parseInt(updatedVinyl.year), updatedVinyl.genre, updatedVinyl.image, updatedVinyl.condition, updatedVinyl.isFavourite, updatedVinyl.id]
            )
            Alert.alert("Vinyl updated successfully!");
            uploadVinyls(); 
        }catch (error){
            console.error(error); 
            Alert.alert("Error updating vinyl", "Please try again later.");
        }
    };

    return (
        <VinylContext.Provider value={{vinyls, addVinyl,removeVinyl, setVinyl, isLoading, uploadVinyls, vCount}}>
            {children}
        </VinylContext.Provider>
    );
}

export default VinylManager;