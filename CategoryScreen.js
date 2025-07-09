import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image, ActivityIndicator} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/CategoryScreenStyle.js';
import Vinyl from './Vinyl.js';
import { CategoryContext } from './CategoryManager.js';
import CategoryAdder from './CategoryAdder.js';
import { VinylContext } from './VinylManager.js';
const CategoryScreen=({})=>{
    const [modalVisible, setModalVisible]=useState(false);
    const {categories,isLoading,uploadCategories}=useContext(CategoryContext);
    const {vinyls,removeVinyl}=useContext(VinylContext);
     console.log("Categorie lette dal DB:", categories);
     if (isLoading){
            return(
                <ActivityIndicator size ="large" color="#ff3131" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
            )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.titolominore}>
                <Text style={styles.testo}>CATEGORIES</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.addButtontext}>Add Categories</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{marginBottom: 20}}>
            <FlatList 
                data={categories}
                renderItem={({item})=>(
                <View>
                    <Text style={styles.testo}>{item.genre}</Text>
                    <FlatList
                        data={vinyls.filter(v=>v.category_id === item.id)}
                        renderItem={({item: vinyl})=>(
                            <Vinyl vinyl={vinyl} onDelete={()=> removeVinyl(vinyl.id)}/>
                        )}
                        keyExtractor={(v)=>v.id.toString()}
                        horizontal
                        />
                    </View>
                    )}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />
            </View>
             <CategoryAdder
            visible={modalVisible}
            onClose={()=>setModalVisible(false)}
            /> 
        </SafeAreaView>
          )
};

export default CategoryScreen; 
