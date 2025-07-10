import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Vinyl from './Vinyl.js';
import styles from './styles/StatsScreenStyle.js';
import { VinylContext } from './VinylManager.js';
import { PieChart } from "react-native-chart-kit";



const StatsScreen=({})=>{
    const {count} = useContext(VinylContext);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.titolominore}>
                <Text style={styles.testo}>MY STATS</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 30 }}>
            <View style={styles.congratsbox}>
                <Text style={styles.testo}>CONGRATS</Text>
                <Ionicons name="trophy-outline" size={24} color="#ff3131" alignItem></Ionicons>
                <Text style={styles.testo}>You have {count} vinyls in your collection</Text>
            </View>
            </View>
            <View style={styles.riga}>
                <Text style={styles.testo}>CHARTS</Text>
                <Ionicons name='pie-chart-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
                
            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>HIDDEN GEMS</Text>
                <Ionicons name='diamond-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
        </ScrollView>
    );
};

export default StatsScreen; 
