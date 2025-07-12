import { StatusBar } from 'expo-status-bar';
import { Alert,ScrollView,StyleSheet, Text , TextInput, View, Button, FlatList, Switch, SafeAreaView, Image,KeyboardAvoidingView, Platform} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styles from './styles/AddScreenStyle.js';
import { useRoute } from '@react-navigation/native';
import { VinylContext } from './VinylManager.js';
import {Picker} from '@react-native-picker/picker';
import { CategoryContext } from './CategoryManager.js';
import * as ImagePicker from 'expo-image-picker';



const AddScreen=({})=>{
    const route = useRoute(); 
    const receivedVinyl = route.params?.vinyl
    const {addVinyl,setVinyl}=useContext(VinylContext)
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [year, setYear] = useState("")
    const [label, setLabel] = useState("")
    const [selectedCondition, setCondition] = useState(null)
    const [favourite, setFavourite] = useState(false)
    const [imageUrl, setImageUrl] = useState("https://media.istockphoto.com/id/481475560/it/vettoriale/modello-record-per-vinile.jpg?s=612x612&w=0&k=20&c=s6bMw-pX22GwGQzKbniKWyqT-h-evD3Ok4bIxUzWJKk=")
    const validExtensionUrls = ['.jpg', 'jpeg', '.png','.gif', '.webp', 'bmp', 'svg'];
    const [editMode, setEditMode]= useState(false);
    const {categories}=useContext(CategoryContext);

    const pickImageFromGallery = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();  
        if (permission.status !== 'granted'){
            alert("Permission to access gallery is required!");
            return; 
        }   

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            aspect: [3,3],
            quality: 1,   
        });

        if (!result.canceled){
            setImageUrl(result.assets[0].uri);
        }
    };

    useEffect(()=>{
        if(receivedVinyl && !editMode){
            setArtist(receivedVinyl.artist); 
            setCondition(receivedVinyl.condition); 
            setFavourite((receivedVinyl.isFavourite==1)? true: false); 
            setSelectedCategory(receivedVinyl.category_id);
            setImageUrl(receivedVinyl.image); 
            setLabel(receivedVinyl.label); 
            setTitle(receivedVinyl.title); 
            setYear(receivedVinyl.year); 
            setEditMode(true);
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

        if (selectedCategory == null){
            alert("Genere obbligatorio!")
            return false;
        }
       
        if(!(imageUrl.startsWith('https://') || imageUrl.startsWith('file://'))){
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
            alert("Inserisci un URL valido che contenga .png, .jpeg etc.. ")
            return false;
        }
        return true;
    }

    
    const resetFields= () =>{
        setTitle(""); 
        setArtist(""); 
        setCondition("Perfect"); 
        setFavourite(false); 
        setSelectedCategory(null);
        setImageUrl("https://media.istockphoto.com/id/481475560/it/vettoriale/modello-record-per-vinile.jpg?s=612x612&w=0&k=20&c=s6bMw-pX22GwGQzKbniKWyqT-h-evD3Ok4bIxUzWJKk=");
        setLabel(""); 
        setYear("");
    }

    const Add = ()=>{
        const newVinyl={
            title:title, 
            artist:artist, 
            year:year, 
            category_id: selectedCategory,
            image:imageUrl, 
            label:label, 
            condition:selectedCondition, 
            isFavourite:favourite? 1:0
            
        };
        addVinyl(newVinyl);
        resetFields();
    }

    const Modify= () =>{
        if(editMode){
            const updateVinyl={
                id:receivedVinyl.id, 
                title:title, 
                artist:artist, 
                year:year, 
                category_id: selectedCategory, 
                image:imageUrl, 
                label:label, 
                condition:selectedCondition, 
                isFavourite:favourite? 1:0
            };
            setVinyl(updateVinyl);
            setEditMode(false);
            resetFields();
        }   
        else{
            Alert.alert("No vinyl selected", "Please select a vinyl to modify");
            return;
        }
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
                            <Text style={styles.title}>{title}</Text>
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
                        <Picker selectedValue={selectedCategory} onValueChange={(itemValue)=>setSelectedCategory(itemValue)}>
                            <Picker.Item value={selectedCategory} label="Select a category" enabled={false}/>
                                {categories.map(cat=>(
                                <Picker.Item label={cat.genre} value={cat.id} key={cat.id}/>
                                ))}
                        </Picker>
                        <Text style={styles.label}>Record label</Text>
                        <TextInput style={styles.input} placeholder= "Enter record label" value={label} onChangeText={setLabel}/> 
                        <Text style={styles.label}>Conditions</Text>
                        <Picker  selectedValue={selectedCondition} onValueChange={(itemValue)=> setCondition(itemValue)}>
                            <Picker.Item label="Perfect conditions" value="Perfect"/>
                            <Picker.Item label="Almost Perfect" value="Almost Perfect"/>
                            <Picker.Item label="Well cared for" value="Well cared"/>
                            <Picker.Item label="Used" value="Used"/>
                            <Picker.Item label="Not playable" value="Not Playable"/>
                        </Picker>
                        <Text style={styles.label}>Cover Image</Text>
                        <Text style={styles.subtext}>Paste the URL of the image you want:</Text>
                        <TextInput style={styles.input} value={imageUrl} keyboardType='url' onChangeText={setImageUrl}></TextInput>
                        <TouchableOpacity style={styles.galleryButton} onPress={pickImageFromGallery}>
                            <Text style={styles.modifyButtontext}>Add from gallery</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
};

export default AddScreen; 