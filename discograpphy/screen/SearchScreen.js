import { Picker } from '@react-native-picker/picker';
import { ScrollView,StyleSheet, Text,TextInput, View, Button, FlatList, Switch, SafeAreaView,Image, SectionList} from 'react-native';
import { useState, useEffect, useContext, use } from 'react';
import styles from '../../styles/SearchScreenStyle.js';
import { TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VinylContext } from '../vinyl/VinylManager.js';
import Vinyl from '../vinyl/Vinyl.js';
import { CategoryContext } from '../category/CategoryManager.js';

const SearchScreen=({})=>{
    const {categories}=useContext(CategoryContext);
    const [selectedGenre, setSelectedGenre] = useState(-1)
    const [stringSearch, setStringSearch]=useState('');
    const [visible,setVisible]=useState(false);
    const [selectedYear, setSelectedYear]=useState(-1)
    const [selectedCondition, setCondition] = useState(-1)
    const {searchVinyls,removeVinyl,vinylsYear,isLoading}=useContext(VinylContext);
    const [vinylsSearched, setVinylsSearched] = useState([]);

    if (isLoading){
            return(
                <ActivityIndicator size ="large" color="#ff3131" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
            )
    }

    useEffect(()=>{
        const uploadVinyls = async () =>{
            const results = await searchVinyls(stringSearch,selectedYear,selectedCondition,selectedGenre);
            setVinylsSearched(results);
        }; 
        uploadVinyls();
    },[stringSearch,selectedYear,selectedCondition,selectedGenre]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('../../assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search vinyls..." value={stringSearch} onChangeText={setStringSearch} />
                <TouchableOpacity style={styles.searchButton} onPress={ async ()=>{
                    const results = await searchVinyls(stringSearch,selectedYear,selectedCondition,selectedGenre);
                    setVinylsSearched(results);}}>
                    <Ionicons name="search-outline" size={24} color="#ffff" />
                </TouchableOpacity>
                <View style={{position:'relative'}}>
                <TouchableOpacity style={styles.filterButton} onPress={() => setVisible(true)} >
                    <Ionicons name="funnel-outline" size={24} color="#ffff" />
                
                </TouchableOpacity>
                <Modal visible={visible} transparent={true} animationType="fade" >
                <View style={{
                            position: 'absolute',
                            top: 160,
                            left:230,
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 6,
                            padding:1,
                            elevation:10,
                            width:150,
                        }}>
                        <Picker
                            selectedValue={selectedYear}
                            onValueChange={(itemValue)=>{setSelectedYear(itemValue);setVisible(false)}}
                        >
                            <Picker.Item label="Year" value={-1}/>
                            {vinylsYear.map((year,index)=>(
                                <Picker.Item label={year.year.toString()} value={year.year} key={`${year.year.toString()}-${index}`}/>
                                
                            ))}
                        </Picker>
                        <Picker
                            selectedValue={selectedGenre}
                            onValueChange={(itemValue)=>{setSelectedGenre(itemValue);setVisible(false)}}
                        >
                            <Picker.Item label="Genre" value={-1}/>
                            {categories.map((cat,index) => (
                                <Picker.Item label={cat.genre} value={cat.genre} key={cat.id}/>
                                
                            ))}
                        </Picker>
                        <Picker selectedValue={selectedCondition} onValueChange={(itemValue)=>{ setCondition(itemValue);setVisible(false)}}>
                            <Picker.Item label="Condition" value={-1}/>
                            <Picker.Item label="Perfect conditions" value="Perfect"/>
                            <Picker.Item label="Almost Perfect" value="Almost Perfect"/>
                            <Picker.Item label="Well cared for" value="Well cared"/>
                            <Picker.Item label="Used" value="Used"/>
                            <Picker.Item label="Not Playable" value="Not Playable"/>
                        </Picker>
                        </View>
                    </Modal>
                </View>
                </View>
                <FlatList
                        data={vinylsSearched}
                        renderItem={({item})=>(
                            <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, category_id:item.category_id }} 
                                onDelete={
                                    async () => {removeVinyl(item.id); 
                                        const update = await searchVinyls(stringSearch,selectedYear,selectedCondition,selectedGenre);
                                        setVinylsSearched(update)
                                    }
                                }
                            />
                     )}
                        ListEmptyComponent={<Text style={styles.noVinyls}>No vinyls found</Text>}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />
        </ScrollView>
    );
};

export default SearchScreen; 
