import React from 'react';
import styles from './styles/Style.js';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

function Vinyl({ title, description, image }) {
    const [vinylSet, addVinyl] = useState([]);
    return (
        <View style={styles.container} >
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.actions}>
                       <View style={styles.specedrow}>
                        <TouchableOpacity style={styles.bottone} onPress={() => console.log('Click!')}>
                             <Text style={styles.buttonText}>More...</Text>
                         </TouchableOpacity>
                          <TouchableOpacity style={styles.bottone} onPress={() => console.log('Click!')}>
                            <Ionicons name="trash-outline" size={32} color="#ff3131" />
                         </TouchableOpacity>
                       </View>

                </View>
            </View>
         </View>
    );
}

export default Vinyl;