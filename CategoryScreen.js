import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './CategoryScreenStyle.js';
import Vinyl from './Vinyl.js';

const CategoryScreen=({})=>{
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.titolominore}>
                <Text style={styles.testo}>CATEGORIES</Text>
                <TouchableOpacity style={styles.goBackButton} onPress={() => console.log('Go Back!')}>
                        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
            </View> 
            <View style={styles.riga}>
                <Text style={styles.testo}>JAZZ</Text>
                <Ionicons name='volume-high-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>HIP HOP</Text>
                <Ionicons name='flame-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            <View style={styles.row}>
                    <Vinyl title='Back to black' description='Album di Amy WhineHouse' image='https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'></Vinyl>
            </View>
            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>ROCK</Text>
                <Ionicons name='flash-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>COUNTRY</Text>
                <Ionicons name='sunny-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>POP</Text>
                <Ionicons name='star-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>BLACK METAL</Text>
                <Ionicons name='radio-button-on-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>DISCO MUSIC</Text>
                <Ionicons name='disc-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>ELETTRONICA</Text>
                <Ionicons name='play-circle-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>FOLK MUSIC</Text>
                <Ionicons name='body-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>FUNK</Text>
                <Ionicons name='fitness-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>BLUES</Text>
                <Ionicons name='planet-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
            <View style={styles.riga}>
                <Text style={styles.testo}>HARD ROCK</Text>
                <Ionicons name='mic-outline' size={24} color='#ff3131' />
            </View>
            <ScrollView horizontal={true}>

            </ScrollView>
        </ScrollView>
    )
};

export default CategoryScreen; 
