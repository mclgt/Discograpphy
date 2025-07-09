import { useContext, useState} from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from './styles/CategoryScreenStyle.js';
import { CategoryContext } from './CategoryManager.js';


const CategoryAdder = ({visible, onClose}) =>{
    const {addCategory} = useContext(CategoryContext);
    const [genre, setGenre]=useState("");

    const validation = () => {
        if(!genre.trim()){
            alert("Nome obbligatorio!"); 
            return false;
        }
        return true;

    };
    return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <TextInput
            placeholderTextColor="white"
            placeholder="Nuova categoria"
            value={genre}
            onChangeText={setGenre}
            style={styles.testo}
          />
          <View style={styles.buttons}>
            <Button title="Aggiungi" onPress={()=>{if (validation()){
              addCategory(name);
              setName("");
              onClose();
            }}} color="darkred" />
            <Button title="Annulla" onPress={onClose} color="grey" />
          </View>
        </View>
      </View>
    </Modal>
  );


};

export default CategoryAdder;