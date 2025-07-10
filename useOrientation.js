import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export default function useOrientation(){
    const[orientation,setOrientation]=useState('PORTRAIT');

    useEffect(()=>{
    const updateOrientation = () =>{
        const {width,height}=Dimensions.get('window');
        setOrientation(height >= width ? 'PORTRAIT' : 'LANDSCAPE');
    };

    Dimensions.addEventListener('change',updateOrientation);
    updateOrientation();

    return ()=> Dimensions.removeEventListener('change',updateOrientation);
}, []);
    return orientation;
}