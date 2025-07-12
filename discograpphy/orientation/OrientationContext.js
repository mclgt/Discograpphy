import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const OrientationContext = createContext();

export const OrientationProvider = ({ children }) => {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(getOrientation());
    };

    const subscription = Dimensions.addEventListener('change', updateOrientation);

    return () => {
      subscription?.remove?.(); 
    };
  }, []);

  return (
    <OrientationContext.Provider value={orientation}>
      {children}
    </OrientationContext.Provider>
  );
};

const getOrientation = () => {
  const { width, height } = Dimensions.get('window');
  return width > height ? 'landscape' : 'portrait';
};

export const useOrientation = () => useContext(OrientationContext);
