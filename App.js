import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppScreen from './app/components/AppScreen';
import AppButton from './app/components/AppButton';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

  const [imageUris, setImageUris] = useState([]);
  const handleAdd =uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove =uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  }
  return (

   
    <AppScreen>
      <ImageInputList
        imageUris={imageUris}
        onAddimage = {handleAdd}
        onRemoveImage={handleRemove}
      
      
      />



    </AppScreen>

    
  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
