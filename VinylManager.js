import React, {createContext,useState,useEffect} from 'react'; 
import Vinyl from './Vinyl';

export const VinylContext = createContext(); 

export const VinylManager = ({children}) =>{
    const [vinyls, setVinyls] = useState([]);

    const addVinyl = (vinyl) => {
        setVinyls(prev => [...prev, vinyl]);
    };

    const removeVinyl = (id) => {
        setVinyls(prev => prev.filter(v => v.id !== id));
    };

    const setVinyl = (updatedVinyl) => {
        setVinyls(prev => prev.map(v => v.id === updatedVinyl.id ? updatedVinyl : v));
    };

    return (
        <VinylContext.Provider value={{vinyls, addVinyl,removeVinyl, setVinyl}}>
            {children}
        </VinylContext.Provider>
    );
}

export default VinylManager;