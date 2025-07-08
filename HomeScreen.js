import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Style.js';
import Vinyl from './Vinyl.js';


const HomeScreen=({})=>{
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.minorTitle}>RECENTLY ADDED</Text>
                <Ionicons name='musical-note-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
            <View style={styles.row}>
                <Text style={styles.minorTitle}>SUGGESTED</Text>
                <Ionicons name='musical-notes-outline' size={24} color='#ff3131' />
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

export default HomeScreen; 

