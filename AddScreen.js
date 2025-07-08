import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, TextInput, View, Button, FlatList, Switch, SafeAreaView,Image} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styles from './styles/AddScreenStyle.js';


const AddScreen=({})=>{
    const [title, setTitle] = useState("New Vinyl Title");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [label, setLabel] = useState("");
    const [year, setYear] = useState("");
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
            <View style={styles.header}>
                <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
            </View>
            <View style={styles.addScreenBody}>
                <View style={styles.spacedrow}>
                    <View style={styles.header2}>
                        <Text style={styles.titolo}>{title}</Text>
                    <TouchableOpacity onPress={() => console.log('Like Vinyl!')}>
                            <Ionicons name="heart-outline" size={24} color="#ff3131" />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.modifyButton} onPress={() => console.log('Modify Vinyl!')}>
                        <Text style={styles.modifyButtontext}>Modify</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={()=>{}}>
                        <Text style={styles.addButtontext}>Add Vinyl</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} placeholder="Enter title here" onChangeText={setTitle} /> 
                    <Text style={styles.label}>Artist</Text>
                    <TextInput style={styles.input} placeholder="Enter artist here" onChangeText={setArtist} /> 
                    <Text style={styles.label}>Year</Text>
                    <TextInput style={styles.input} placeholder="Enter year here" onChangeText={setYear} /> 
                    <Text style={styles.label}>Genre</Text>
                    <TextInput style={styles.input} placeholder="Enter genre here" onChangeText={setGenre} />
                    <Text style={styles.label}>Record label</Text>
                    <TextInput style={styles.input} placeholder="Enter record label here" onChangeText={setLabel}/> 
                    <Text style={styles.label}>Conditions</Text>
                    <TextInput style={styles.input} placeholder="Enter conditions here"  /> 
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
