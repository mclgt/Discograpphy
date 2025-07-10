import React, {createContext,useState,useEffect, useContext} from 'react'; 
import Vinyl from './Vinyl';
import { useSQLiteContext } from 'expo-sqlite';
import { Alert } from 'react-native';
import { CategoryContext } from './CategoryManager';

export const VinylContext = createContext(); 

export const VinylManager = ({children}) =>{
    const [vinyls, setVinyls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [vinylsSearched, setVinylsSearched]=useState([]);
    const [vinylsYear,setVinylsYear]=useState([]);
    const {uploadCategories}=useContext(CategoryContext);
    const db = useSQLiteContext();

    const uploadVinyls = async () =>{
        try{
            const results = await db.getAllAsync(
               `SELECT vinyls.*, category.genre 
                FROM vinyls
                LEFT JOIN category ON vinyls.category_id = category.id
                ORDER BY vinyls.id DESC;`
            );
            setVinyls(results); 
        }catch(error){
            console.error("Database error",error);
        }finally{
            setIsLoading(false);
        }
    }
     const uploadVinylsYear = async () =>{
        try{
            const results = await db.getAllAsync(
               `SELECT DISTINCT vinyls.year 
                FROM vinyls
                ORDER BY vinyls.year;`
            );
            setVinylsYear(results); 
            console.log(vinylsYear);
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
        console.log("Aggiungo vinile:", newVinyl);

       try{
            await db.runAsync(
                'INSERT INTO vinyls (title, artist, label, year, category_id, image, condition, isFavourite) VALUES (?, ?, ?, ?, ?, ?, ? ,?)',
                [newVinyl.title, newVinyl.artist, newVinyl.label, parseInt(newVinyl.year), newVinyl.category_id, newVinyl.image, newVinyl.condition, newVinyl.isFavourite]
            )
            await db.runAsync(
                'UPDATE category set  vinylNumber= vinylNumber+1 where id = ?',
                [newVinyl.category_id]
            )
            await uploadCategories();
            await uploadVinylsYear();
            Alert.alert("Vinyl added successfully!");
            uploadVinyls(); 
        }catch (error){
            console.error(error); 
            Alert.alert("Error adding vinyl", "Please try again later.");
        }
    };

    const removeVinyl = async (id) => {
       try{
            const category = await db.getAllAsync(
                'SELECT category_id FROM vinyls WHERE id = ?',
                [id]
            )
            const categoryId=category[0].category_id;
            await db.runAsync(
                'DELETE FROM vinyls WHERE id = ?',
                [id]
            )
            await db.runAsync(
                'UPDATE category set  vinylNumber =  vinylNumber - 1 WHERE id = ?',
                [categoryId]
            )
            Alert.alert("Vinyl removed successfully!");
            await uploadCategories();
            uploadVinyls(); 
        }catch (error){
            console.error(error); 
            Alert.alert("Error removing vinyl", "Please try again later.");
        };
    };

    const setVinyl = async (updatedVinyl) => {
        try{
            await db.runAsync(
                'UPDATE vinyls SET title = ?, artist = ?, label = ?, year = ?, category_id = ?, image = ?, condition = ?, isFavourite = ? WHERE id = ?',
                [updatedVinyl.title, updatedVinyl.artist, updatedVinyl.label, parseInt(updatedVinyl.year), updatedVinyl.category_id, updatedVinyl.image, updatedVinyl.condition, updatedVinyl.isFavourite, updatedVinyl.id]
            )
            await db.runAsync(
                'UPDATE category set  vinylNumber = vinylNumber+1 where id = ?',
                [updatedVinyl.category_id]
            )
            await uploadCategories();
            await uploadVinylsYears();
            Alert.alert("Vinyl updated successfully!");
            uploadVinyls(); 
        }catch (error){
            console.error(error); 
            Alert.alert("Error updating vinyl", "Please try again later.");
        }
    };
    const searchVinyls= async (string)=>{
        const stringSearch = `%${string}%`
        console.log("Cerco:", string, "=> wildcard:", `%${string}%`);

        try{
        const results= await db.getAllAsync(
                'SELECT * FROM vinyls LEFT JOIN category ON vinyls.category_id=category.id WHERE vinyls.title LIKE ? OR vinyls.artist LIKE ? OR category.genre LIKE ?',
                [stringSearch,stringSearch,stringSearch]
            );
            console.log("Risultati ricerca:", results);

            setVinylsSearched(results);
        }
        catch(error){
            console.error(error); 
        }
    };
    return (
        <VinylContext.Provider value={{vinyls, addVinyl,removeVinyl, setVinyl, isLoading, uploadVinyls,vinylsSearched,searchVinyls,vinylsYear}}>
            {children}
        </VinylContext.Provider>
    );

}

export default VinylManager;