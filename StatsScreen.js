import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './StatsScreenStyle.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const StatsScreen=({})=>{
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/icon.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
        </ScrollView>
    );
};

export default StatsScreen; 
