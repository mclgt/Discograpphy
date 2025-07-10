import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text,TextInput, View, Button, FlatList, Switch, SafeAreaView,Image, SectionList} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './styles/SearchScreenStyle.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VinylContext } from './VinylManager.js';
import Vinyl from './Vinyl.js';

const SearchScreen=({})=>{
    const [stringSearch, setStringSearch]=useState('');
    const [open,setOpen]=useState(false);
    const {vinylsSearched,searchVinyls}=useContext(VinylContext);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search for vinyls..." value={stringSearch} onChangeText={setStringSearch} />
                <TouchableOpacity style={styles.searchButton} onPress={()=>searchVinyls(stringSearch)}>
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
                            width:300,
  }}>
                            <Text style={{paddingVertical:5}}>Anno</Text>
                            <Text style={{paddingVertical: 5}}>Genere</Text>
                            <Text style={{paddingVertical: 5}}>Condizione</Text>
                            </View>
                        )
                    }
                    <SectionList>
                        data={searchVinyls}
                        renderItem={({item})=>(
                            <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, genre: item.genre }} onDelete={() => removeVinyl(item.id)}/>
                            )}
                    </SectionList>
                </View>
                </View>
        </ScrollView>
    );
};

export default SearchScreen; 
