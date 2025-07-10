import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Vinyl from './Vinyl.js';
import styles from './styles/StatsScreenStyle.js';
import CategoryChart from './StatisticsCharts/CategoryChart.js';
import { VinylContext } from './VinylManager.js';
import FrequencyChart from './StatisticsCharts/FrequencyChart.js';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

const StatsScreen=({})=>{
    const {vCount, getOldestVinyls, vinyls, removeVinyl} = useContext(VinylContext);
      const [oldest, setOldest] = useState([]);

        useEffect(() => {
            const uploadOldest = async () => {
            const old = await getOldestVinyls();
            setOldest(old);
            };

            uploadOldest();
        }, [vinyls]);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.smalltitle}>
                <Text style={styles.testo}>MY STATS</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <View style={styles.congratsbox}>
                <Text style={styles.headerTitle}>CONGRATS</Text>
                <Ionicons name="trophy-outline" size={40} color="#ff3131" alignItem></Ionicons>
                <Text style={styles.testo}>You have {vCount} vinyls in your collection</Text>
            </View>
            </View>
            <View style={styles.riga}>
                <Ionicons name='pie-chart-outline' size={24} color='#ff3131' />
                <Text style={styles.testo}> CHARTS</Text>
                
            </View>
            <CategoryChart style={{backgroundColor: 'white'}}/>
           <FrequencyChart style={{backgroundColor: 'white'}}/>   
            <View style={styles.riga}>
                <Ionicons name="briefcase-outline" size={24} color='#ff3131' />
                <Text style={styles.testo}> OLDEST JAMS</Text>
        
            </View>
            <FlatList 
                data={oldest}
                renderItem={({item})=>(
                    <Vinyl vinyl={{id:item.id, title:item.title, artist: item.artist, image: item.image, year: item.year, label: item.label, condition:item.condition, genre: item.genre, isFavourite:item.isFavourite }} onDelete={removeVinyl}/>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }}/> }
                ListEmptyComponent={<Text style={styles.testo}>No vinyls found</Text>}
                contentContainerStyle={{ paddingHorizontal: 10 }}/>    
        </ScrollView>
    );
};

export default StatsScreen; 
