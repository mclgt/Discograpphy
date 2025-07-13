import React, {createContext,useState,useEffect, useContext} from 'react'; 
import { useSQLiteContext } from 'expo-sqlite';
import { Alert } from 'react-native';
import { CategoryContext } from '../category/CategoryManager.js';

export const VinylContext = createContext(); 

export const VinylManager = ({children}) =>{
    const [vinyls, setVinyls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [vinylsYear,setVinylsYear]=useState([]);
    const {uploadCategories}=useContext(CategoryContext);
    const [vCount, setVCount] = useState(0);
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
            setVCount(results.length); 
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
                WHERE vinyls.year IS NOT NULL
                ORDER BY vinyls.year;`
            );
            setVinylsYear(results); 
        }catch(error){
            console.error("Database error",error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        if(db){
            uploadVinyls()
            uploadVinylsYear()
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
                'UPDATE category set  vinylNumber = vinylNumber + 1 where id = ?',
                [newVinyl.category_id]
            )
            uploadCategories();
            uploadVinylsYear();
            uploadVinyls(); 
            Alert.alert("Vinyl added successfully!");
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
            uploadCategories();
            uploadVinylsYear();
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
                'UPDATE vinyls SET title = ?, artist = ?, label = ?, year = ?, category_id = ?, image = ?, condition = ?, isFavourite = ? WHERE id = ?',
                [updatedVinyl.title, updatedVinyl.artist, updatedVinyl.label, parseInt(updatedVinyl.year), updatedVinyl.category_id, updatedVinyl.image, updatedVinyl.condition, updatedVinyl.isFavourite, updatedVinyl.id]
            )
            uploadCategories();
            uploadVinylsYear();
            Alert.alert("Vinyl updated successfully!");
            uploadVinyls(); 
        }catch (error){
            console.error(error); 
            Alert.alert("Error updating vinyl", "Please try again later.");
        }
    };

    const searchVinyls= async (string,year,condition,genre)=>{
        try{
            const stringSearch = `%${string}%`
            console.log(string,year,condition,genre);
            let query = 'SELECT vinyls.* FROM vinyls LEFT JOIN category ON vinyls.category_id=category.id WHERE 1=1';
            const params=[];
            if (string.trim() != ""){
                query += ' AND (vinyls.title LIKE ? OR vinyls.artist LIKE ? OR vinyls.label LIKE ?)';
                params.push(stringSearch,stringSearch,stringSearch);
            }
            if (year != -1){
                query += ' AND vinyls.year=?';
                params.push(parseInt(year));
            }
            if (condition != -1){
                query += ' AND vinyls.condition=?';
                params.push(condition);
            }
            if (genre != -1){
                query += ' AND category.genre=?'
                params.push(genre);
            }        
            const res = await db.getAllAsync(query,params);
            return res;
        }
        catch(error){
            console.error(error);
            return [];
        }
        
    };
  
    const getOldestVinyls = async () =>{
        try{
            const topOldest = await db.getAllAsync(
                'SELECT * FROM vinyls WHERE year != "" AND year IS NOT NULL ORDER BY year ASC LIMIT 7'
            )
            return topOldest;
        }catch(error){
            console.error(error); 
            Alert.alert("Error fetching oldest vinyls","Please try again later.");
            return [];
        }
    }

    const theOldestAddDate = async () =>{
        try{
            const oldestAddDate = await db.getAllAsync(
                'SELECT MIN(dateAdded) AS oldestDate FROM vinyls'
            )
            return oldestAddDate[0]?.oldestDate || null;
        }catch(error){
            console.error(error); 
            Alert.alert("Error fetching oldest add date", "Please try again later.");
            return null;
        }
    }

    const theNewestAddDate = async () =>{
        try{
            const newestAddDate = await db.getAllAsync(
                'SELECT MAX(dateAdded) AS newestDate FROM vinyls'
            )
            return newestAddDate[0]?.newestDate || null;
        }catch(error){
            console.error(error); 
            Alert.alert("Error fetching newest add date", "Please try again later.");
            return null;
        }
    }

    const setFavourite = async (id, isFavourite) => {
        try{
           await db.runAsync(
                'UPDATE vinyls SET isFavourite = ? WHERE id = ?',
                [isFavourite ? 1 : 0, id]
            )
            uploadVinyls();
        }catch(error){
            console.error("Error updating favourite status", error);
            Alert.alert("Error updating favourite status", "Please try again later.");
        }
    }

    return (
        <VinylContext.Provider value={{vinyls, addVinyl,removeVinyl, setVinyl, isLoading, uploadVinyls, vinylsYear, vCount,searchVinyls, getOldestVinyls, theOldestAddDate, theNewestAddDate, setFavourite}}>
            {children}
        </VinylContext.Provider>
    );

}

export default VinylManager;