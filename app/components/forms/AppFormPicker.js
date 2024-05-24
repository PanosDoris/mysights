import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({items, name,numberOfColumns, PickerItemComponent, placeholder}) {
    const {setFieldValue , values, errors, touched} = useFormikContext();
    return (
        <>
            <AppPicker
                numberOfColumns={numberOfColumns}
                items={items}
                onSelectItem={(item) => setFieldValue(name , item)}
                placeholder={placeholder}
                selecteditem={values[name]}
                PickerItemComponent={PickerItemComponent}
                
                />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>

    );
}


export default AppFormPicker;