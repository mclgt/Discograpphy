import React from 'react';
import styles from './styles/Style.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Vinyl({ vinyl, onDelete }) {
    if (!vinyl){
        return null; 
    }
    const navigator = useNavigation(); 

    const goDetails = () =>{
        navigator.navigate('Add', {vinyl});
    };
    return (
        <View style={styles.container} >
            <Image source={{ uri: vinyl.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{vinyl.title}</Text>
                <Text style={styles.description}>{vinyl.artist}</Text>
                <Text style={styles.description}>{vinyl.year}</Text>
                <Text style={styles.description}>{vinyl.condition}</Text>
                <View style={styles.actions}>
                       <View style={styles.specedrow}>
                        <TouchableOpacity style={styles.bottone} onPress={goDetails}>
                             <Text style={styles.buttonText}>More...</Text>
                         </TouchableOpacity>
                          <TouchableOpacity style={styles.bottone} onPress={onDelete}>
                            <Ionicons name="trash-outline" size={32} color="#ff3131" />
                         </TouchableOpacity>
                       </View>

                </View>
            </View>
         </View>
    );
}

export default Vinyl;