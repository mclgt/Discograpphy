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
import { OrientationContext } from './OrientationContext.js';

const CategoryScreen=({})=>{
    const orientation = useContext(OrientationContext);
    const [modalVisible, setModalVisible]=useState(false);
    const {categories,isLoading,uploadCategories,removeCategory}=useContext(CategoryContext);
    const {vinyls,removeVinyl}=useContext(VinylContext);
     console.log("Categorie lette dal DB:", categories);
     if (isLoading){
            return(
                <ActivityIndicator size ="large" color="#ff3131" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
            )
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.biggerTitle}>CATEGORIES</Text>
            <View style={styles.addButton}>
                <TouchableOpacity style={styles.addButtontext} onPress={() => setModalVisible(true)}>
                        <Text style={styles.addButtontext}>Add Category</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={orientation === 'portrait'? styles.categoryContainer : styles.categoryContainerLandscape}>
            <FlatList 
                data={categories}
                scrollEnabled={false}
                renderItem={({item})=>(
                <View>
                    <View style={styles.buttons}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.text}>{item.genre}</Text>
                    <Text style={[styles.text , { marginLeft: 8 ,color: '#ff3131'}]}>{item.vinylNumber}</Text>
                    </View>
                    <TouchableOpacity style={styles.bottone} onPress={()=>removeCategory(item.id)} >
                        <Ionicons name="trash-outline" size={28} color="#ff3131" />
                    </TouchableOpacity>
                    </View>
                    <FlatList
                        data={vinyls.filter(v=>v.category_id === item.id)}
                        renderItem={({item: vinyl})=>(
                            <Vinyl vinyl={vinyl} onDelete={()=> removeVinyl(vinyl.id)}/>
                        )}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    />
                </View>
                )}/>
            </View>
            <CategoryAdder
                visible={modalVisible}
                onClose={()=>setModalVisible(false)}
            /> 
        </ScrollView>
    )
};

export default CategoryScreen; 
