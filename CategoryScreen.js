import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/CategoryScreenStyle.js';
import Vinyl from './Vinyl.js';
import CategoryAdder from './CategoryAdder.js';

const CategoryScreen=({})=>{
    const [modalVisible, setModalVisible]=useState(false);
    const[nameCategory,setCategories]=useState([
        'JAZZ', 'HIP HOP', 'ROCK', 'COUNTRY', 'POP', 'BLACK METAL','DISCO MUSIC','ELETTRONICA','FOLK MUSIC', 'FUNK', 'BLUES', 'HARD ROCK'
    ]);
    const handleAddCategory = (newCategory) =>{
        setCategories(prev => [...prev, newCategory]);
    };
    return (
        <View style={{flexDirection: 'row',
            flexWrap: 'nowrap',
            marginLeft: 10,
            marginBottom: 10,}}>
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
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
            {nameCategory.map((nome,indice)=>(
                <View>
                <Text style={styles.testo}>
                {nome}
                </Text>
                <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                </View>
                </ScrollView>
            </View>
            )
            )}
            <View style={styles.riga}>
                <Text style={styles.testo}>JAZZ</Text>
                <Ionicons name='volume-high-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>HIP HOP</Text>
                <Ionicons name='flame-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>ROCK</Text>
                <Ionicons name='flash-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>COUNTRY</Text>
                <Ionicons name='sunny-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>POP</Text>
                <Ionicons name='star-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>BLACK METAL</Text>
                <Ionicons name='radio-button-on-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>DISCO MUSIC</Text>
                <Ionicons name='disc-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>ELETTRONICA</Text>
                <Ionicons name='play-circle-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>FOLK MUSIC</Text>
                <Ionicons name='body-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>FUNK</Text>
                <Ionicons name='fitness-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>BLUES</Text>
                <Ionicons name='planet-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>HARD ROCK</Text>
                <Ionicons name='mic-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>  
        </ScrollView>
        <CategoryAdder
            visible={modalVisible}
            onClose={()=>setModalVisible(false)}
            onSubmit={handleAddCategory}
            />
    </View>
    )
};

export default CategoryScreen; 
