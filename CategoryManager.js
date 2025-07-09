import {createContext, useState, useEffect} from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles/CategoryScreenStyle.js';
import {useSQLiteContext} from 'expo-sqlite';

export const CategoryContext = createContext();

const CategoryManager = ({children}) =>{
    const [categories, setCategories]=useState([]);
    const [isLoading,setLoading]=useState(false);
    const db = useSQLiteContext();
    const uploadCategories = async () =>{
        try{
            const results = await db.getAllAsync(
                'SELECT * FROM category ORDER BY id'
            );
            setCategories(results); 
        }catch(error){
            console.error("Database error",error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() =>{
            if(db){
                uploadCategories()
            } else if (!db){
                console.warn("Database not initialized");
            }
        },[db])
    const addCategory = async (newCategory) => {
            if (!newCategory || newCategory.trim() === '') {
                Alert.alert("Errore", "Il genere non può essere vuoto.");
                return;
            }
           try{
                await db.runAsync(
                    'INSERT INTO category (genre) VALUES (?)',
                    [newCategory]
                )
                Alert.alert("Category added successfully!");
                uploadCategories(); 
            }catch (error){
                console.error(error); 
                Alert.alert("Error adding category", "Please try again later.");
            }
        };
     return (
    <CategoryContext.Provider value={{categories, addCategory,setCategories, isLoading, uploadCategories}}>
      {children}
    </CategoryContext.Provider>
  );


};

export default CategoryManager;