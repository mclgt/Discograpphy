import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './Style.js';


const HomeScreen=({})=>{
    return (
        <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/icon.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.minorTitle}>RECENTLY ADDED</Text>
                <Ionicons name='musical-note-outline' size={24} color='#ff3131' />
            </View>
            <View style={styles.row}>
                <Text style={styles.minorTitle}>SUGGESTED</Text>
                <Ionicons name='musical-notes-outline' size={24} color='#ff3131' />
            </View>
        </View>
       
    );
};

export default HomeScreen; 

