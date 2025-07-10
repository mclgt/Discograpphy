import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text,TextInput, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './styles/SearchScreenStyle.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearchScreen=({})=>{
    const [stringSearch, setStringSearch]=useState('');
    const [open,setOpen]=useState(false);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search for vinyls..." />
                <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search!')}>
                    <Ionicons name="search-outline" size={24} color="#ffff" />
                </TouchableOpacity>
                <View style={{position:'relative'}}>
                <TouchableOpacity style={styles.filterButton} onPress={() => setOpen(!open)}>
                    <Ionicons name="funnel-outline" size={24} color="#ffff" />
                
                </TouchableOpacity>
                    {
                        open && (
                            <View style={{
                            position: 'absolute',
                            top: 50,
                            left:0,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 6,
                            padding:1,
                            zIndex: 10,
                            width:200,
  }}>

                            <Text style={{paddingVertical:5}}>Anno</Text>
                            <Text style={{paddingVertical: 5}}>Genere</Text>
                            <Text style={{paddingVertical: 5}}>Condizione</Text>
                            </View>
                        )
                    }
                    
                </View>
                </View>
        </ScrollView>
    );
};

export default SearchScreen; 
