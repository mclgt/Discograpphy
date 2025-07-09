import {useState} from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles/CategoryScreenStyle.js';

const CategoryAdder = ({visible, onClose, onSubmit}) =>{
    const [name, setName]=useState('');

    const handleSubmit = () => {
        if(name == ''){
            alert("Nome obbligatorio!"); 
            return false;
        }
        else if (name.trim()){
            onSubmit(name.trim())
            setName('');
            onClose();
        }
    };

     return (
    <Modal visible={visible} transparent animationType="fade">
      <View styles={styles.overlay}>
        <View styles={styles.modalContent}>
          <TextInput
            placeholderTextColor="white"
            placeholder="Nuova categoria"
            value={name}
            onChangeText={setName}
            style={styles.testo}
          />
          <View style={styles.buttons}>
            <Button title="Aggiungi" onPress={handleSubmit} color="darkred" />
            <Button title="Annulla" onPress={onClose} color="grey" />
          </View>
        </View>
      </View>
    </Modal>
  );


};

export default CategoryAdder;