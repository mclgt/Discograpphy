import { VinylContext } from './VinylManager.js';
import {ActivityIndicator, ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Style.js';
import Vinyl from './Vinyl.js';


const HomeScreen=({})=>{
    const {vinyls, removeVinyl,isLoading, uploadVinyls} = useContext(VinylContext);
    const recentVinyls = vinyls.slice(0,5);
    const [suggested, setSuggested] = useState([]); 

    const getRandomVinyls = (arr, count) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() =>{
        if(vinyls.length > 0){
            const index = Math.floor(Math.random() * vinyls.length) || 1;
            const randomVinyls = getRandomVinyls(vinyls, index);
            setSuggested(randomVinyls);
        }else{
            setSuggested([]);
        }
    },[vinyls]);

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
            <View style={styles.centeredrow}>
                <Text style={styles.biggerTitle}>RECENTLY ADDED</Text>
                <Ionicons name='musical-note-outline' size={24} color='#ff3131' />
            </View>
            <View>
                <FlatList
                    data={recentVinyls}
                    renderItem={({item})=>(
                        <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, category_id: item.category_id, isFavourite:item.isFavourite }}
                            onDelete={() => removeVinyl(item.id)}/>
                    )}
                    ListEmptyComponent={
                            <Text style={styles.noVinyls}>No vinyls found</Text>
                    }
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>
            <View style={styles.centeredrow}>
                <Text style={styles.biggerTitle}>SUGGESTED</Text>
                <Ionicons name='musical-notes-outline' size={24} color='#ff3131' />
            </View>
            <View>
                <FlatList
                    data={suggested}
                    renderItem={({item})=>(
                        <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, genre: item.genre, isFavourite:item.isFavourite }}
                            onDelete={() => {removeVinyl(item.id); setSuggested(prev => prev.filter(v => v.id !== id));}}/>
                    )}
                    ListEmptyComponent={<Text style={styles.noVinyls}>No favourites found</Text>}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>
            <View style={styles.centeredrow}>
                <Text style={styles.biggerTitle}>YOUR COLLECTION</Text>
                <Ionicons name='disc-outline' size={24} color='#ff3131' />
            </View>
            <View>
                <FlatList
                    data={vinyls}
                    renderItem={({item})=>(
                        <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, genre: item.genre, isFavourite:item.isFavourite }}
                            onDelete={() => removeVinyl(item.id)}/>
                    )}
                    ListEmptyComponent={<Text style={styles.noVinyls}>No vinyls found</Text>}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>
            <View style={styles.centeredrow}>
                <Text style={styles.biggerTitle}>YOUR FAVOURITES</Text>
                <Ionicons name='heart-outline' size={24} color='#ff3131' />
            </View>
            <View>
                <FlatList
                    data={vinyls.filter(v => v.isFavourite === 1)}
                    renderItem={({item})=>(
                        <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, genre: item.genre, isFavourite:item.isFavourite }}
                            onDelete={() => removeVinyl(item.id)}/>
                    )}
                    ListEmptyComponent={<Text style={styles.noVinyls}>No favourites found</Text>}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }}/>}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>
        </ScrollView>
       
    );
};

export default HomeScreen; 

