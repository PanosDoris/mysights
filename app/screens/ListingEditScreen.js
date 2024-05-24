import React , {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';

import {AppForm , AppFormField, AppSubmitbutton, AppFormPicker} from '../components/forms'
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import useLocation from '../../hooks/useLocation';


const validationSchema= Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    info: Yup.string().required().min(1).label("Info"),
    category: Yup.object.required().nullable().label("Category"),
    images: Yup.array().min(1,"please select at least one Image")
})

const categories = [
    {label : "C1", value: 1, backgroundColor:"blue", icon: 'apps'},
    {label : "C2", value: 2, backgroundColor:"red", icon: 'email'},
    {label : "C3", value: 3, backgroundColor:"green", icon: 'lock'},
]

function ListingEditScreen() {

    const location = useLocation();

    return (

        <AppScreen style ={styles.container}>

            <AppForm
                initialValues={{
                    title: '',
                    info: '',
                    category:null,
                    images: []
                    }}
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema}
            >

                <AppFormPicker name="images"/>

                        <AppFormField
                            maxLength = {255}
                            name = "title"

                            placeHolder="Title"

                        />
                        <AppFormField
                            maxLength = {255}
                            name = "info"
                            multiline
                            numberOfLines = {3}
                            placeHolder="Info"

                        />

                        <AppPicker
                            name="category"
                            items = {categories}
                            PickerItemComponent={AppCategoryPickerItem}
                            placeHolder="Category"
                            numberOfColumns={3}

                        />
                        <AppSubmitbutton title="Add"/>


            </AppForm>

        
        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container: {

        padding: 10,
    } 

})

export default ListingEditScreen;