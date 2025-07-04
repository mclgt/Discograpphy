import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text,TextInput, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './SearchScreenStyle.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearchScreen=({})=>{
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
                <TouchableOpacity style={styles.filterButton} onPress={() => console.log('Filter!')}>
                    <Ionicons name="funnel-outline" size={24} color="#ffff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SearchScreen; 
