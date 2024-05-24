import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function AppSubmitbutton({title}) {

    const {handleSubmit} = useFormikContext();
    return (

        <AppButton title = {title} onPress={handleSubmit}/>
    );
}

const styles = StyleSheet.create({
    
})

export default AppSubmitbutton;