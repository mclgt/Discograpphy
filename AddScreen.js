import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text , TextInput, View, Button, FlatList, Switch, SafeAreaView, Image,KeyboardAvoidingView, Platform} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styles from './styles/AddScreenStyle.js';
import { useRoute } from '@react-navigation/native';
import { VinylContext } from './VinylManager.js';
import {Picker} from '@react-native-picker/picker';



const AddScreen=({})=>{
    const route = useRoute(); 
    const receivedVinyl = route.params?.vinyl
    const {addVinyl,setVinyl}=useContext(VinylContext)
    const [nextID, setnextID] = useState(1);
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    const [label, setLabel] = useState("")
    const [selectedCondition, setCondition] = useState("Perfect")
    const [favourite, setFavourite] = useState(false)
    const [imageUrl, setImageUrl] = useState("https://media.istockphoto.com/id/481475560/it/vettoriale/modello-record-per-vinile.jpg?s=612x612&w=0&k=20&c=s6bMw-pX22GwGQzKbniKWyqT-h-evD3Ok4bIxUzWJKk=")
    const validExtensionUrls = ['.jpg', '.jpeg', '.png','.gif', '.webp', '.bmp', '.svg'];

    useEffect(()=>{
        if(receivedVinyl){
            setArtist(receivedVinyl.artist); 
            setCondition(receivedVinyl.condition); 
            setFavourite(receivedVinyl.isFavourite); 
            setGenre(receivedVinyl.genre); 
            setImageUrl(receivedVinyl.image); 
            setLabel(receivedVinyl.label); 
            setTitle(receivedVinyl.title); 
            setYear(receivedVinyl.year)
        }
    },[receivedVinyl])

    const validation = () =>{
        if(!title.trim()){
            alert("Titolo obbligatorio!"); 
            return false;
        }
        if (parseInt(year) > new Date().getFullYear() || parseInt(year) < 1000){
            alert("Anno non valido!")
            return false;
        }
        if(!imageUrl.startsWith('https://')){
            alert("Inserisci un URL valido che inizi con https:// ")
            return false;
        }
        let valid = false; 
        for (const end of validExtensionUrls){
            if (imageUrl.includes(end)){
                valid= true;
                break;
            }
        }
        if (valid==false){
            alert("Inserisci un URL valido che contenga con .png, .jpeg etc.. ")
            return false;
        }
        return true;
    }

    
    const resetFields= () =>{
        setTitle(""); 
        setArtist(""); 
        setCondition("Perfect"); 
        setFavourite(false); 
        setGenre(""); 
        setImageUrl("https://media.istockphoto.com/id/481475560/it/vettoriale/modello-record-per-vinile.jpg?s=612x612&w=0&k=20&c=s6bMw-pX22GwGQzKbniKWyqT-h-evD3Ok4bIxUzWJKk=");
        setLabel(""); 
        setYear("");
    }

    const Add = ()=>{
        const newVinyl = {
            id: nextID,
            title: title,
            artist: artist, 
            isFavourite: favourite, 
            genre: genre, 
            year: year, 
            image: imageUrl, 
            label: label,
            condition: selectedCondition,
        };
        addVinyl(newVinyl);
        setnextID((prevID) => prevID+1);
        resetFields();
    }

    const Modify= () =>{
        const updateVinyl={
            id:receivedVinyl.id, 
            title:title, 
            artist:artist, 
            year:year, 
            genre:genre, 
            image:imageUrl, 
            label:label, 
            condition:selectedCondition, 
            isFavourite:favourite};
            setVinyl(updateVinyl);
        resetFields();
    }



    return (
    <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} keyboardShouldPersistTaps='handled'>
                <View style={styles.header}>
                    <Image source={require('./assets/IconNobg.png')} style={styles.logo} />
                    <Text style={styles.headerTitle}>DISCOGR<Text style={styles.red}>APP</Text>HY</Text>
                </View>
                <View style={styles.addScreenBody}>
                    <View style={styles.spacedrow}>
                        <View style={styles.header2}>
                            <Text style={styles.titolo}>{title}</Text>
                        <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                                <Ionicons name={favourite? "heart":"heart-outline"} size={24} color="#ff3131" />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.modifyButton} 
                            onPress={() =>{
                                if(validation()){
                                    Modify();
                            }}}>
                            <Text style={styles.modifyButtontext}>Modify</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}
                                onPress={()=>{
                                if(validation()){
                                    Add();
                            }}}>
                            <Text style={styles.addButtontext}>Add Vinyl</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput style={styles.input} placeholder="Enter title" value={title} onChangeText={setTitle} /> 
                        <Text style={styles.label}>Artist</Text>
                        <TextInput style={styles.input} placeholder="Enter artist" value={artist} onChangeText={setArtist} /> 
                        <Text style={styles.label}>Year</Text>
                        <TextInput style={styles.input} placeholder="Enter year" value={year} keyboardType= "numeric" onChangeText={setYear} /> 
                        <Text style={styles.label}>Genre</Text>
                        <TextInput style={styles.input} placeholder="Enter genre" value={genre} onChangeText={setGenre} />
                        <Text style={styles.label}>Record label</Text>
                        <TextInput style={styles.input} placeholder= "Enter record label" value={label} onChangeText={setLabel}/> 
                        <Text style={styles.label}>Conditions</Text>
                        <Picker selectedValue={selectedCondition} onValueChange={(itemValue)=> setCondition(itemValue)}>
                            <Picker.Item label="Perfect conditions" value="Perfect"/>
                            <Picker.Item label="Almost Perfect" value="Almost Perfect"/>
                            <Picker.Item label="Well cared for" value="Well cared"/>
                            <Picker.Item label="Used" value="Used"/>
                            <Picker.Item label="Barely playable" value="Barely playable"/>
                        </Picker>
                        <Text style={styles.label}>Cover Image</Text>
                        <Text style={styles.subtext}>Paste the URL of the image you want:</Text>
                        <TextInput style={styles.input} value={imageUrl} keyboardType='url' onChangeText={setImageUrl}></TextInput>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
};

export default AddScreen; 