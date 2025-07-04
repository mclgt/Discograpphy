import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, TextInput, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styles from './AddScreenStyle.js';


const AddScreen=({})=>{
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.addScreenBody}>
                <View style={styles.header2}>
                    <Text style={styles.titolo}>Vinyl name</Text>
                    <TouchableOpacity onPress={() => console.log('Like Vinyl!')}>
                        <Ionicons name="heart-outline" size={24} color="#ff3131" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.goBackButton} onPress={() => console.log('Go Back!')}>
                        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modifyButton} onPress={() => console.log('Modify Vinyl!')}>
                        <Text style={styles.modifyButtontext}>Modify</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={() => console.log('Add Vinyl!')}>
                        <Text style={styles.addButtontext}>Add Vinyl</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} placeholder="Enter title here" /> 
                    <Text style={styles.label}>Artist</Text>
                    <TextInput style={styles.input} placeholder="Enter artist here" /> 
                    <Text style={styles.label}>Year</Text>
                    <TextInput style={styles.input} placeholder="Enter year here" /> 
                    <Text style={styles.label}>Genre</Text>
                    <TextInput style={styles.input} placeholder="Enter genre here" />
                    <Text style={styles.label}>Record label</Text>
                    <TextInput style={styles.input} placeholder="Enter record label here" /> 
                    <Text style={styles.label}>Conditions</Text>
                    <TextInput style={styles.input} placeholder="Enter conditions here" /> 
                    <Text style={styles.label}>Cover Image</Text>
                    <TouchableOpacity onPress={() => console.log('Upload Image!')}>
                        <Ionicons name="cloud-upload-outline" size={24} color="#ff3131" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default AddScreen; 
