import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from './ImageInputList';
import { AppErrorMessage } from './forms';



function FormImagePicker({ name }) {
    const {setFieldValue , values, errors, touched} = useFormikContext();
    
    const imageUris = values[name];
    
    const handleAdd =uri => {
        setFieldValue(name, [...imageUris, uri]);
      }
    
      const handleRemove =uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
      }
    return (

        <>

            <ImageInputList 
                imageUris={imageUris}
                onAddimage={handleAdd}
                onRemoveImage={handleRemove}
                
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>

        
        </>





    );
}


export default FormImagePicker;