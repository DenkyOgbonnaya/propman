import React, {useState} from 'react';
import {Button} from 'reactstrap';
import PropertyForm from './propertyForm';

const ToggleAblePropertyForm = ({submitCreate}) => {
    const[openPropertyForm, setOpenPropertyForm] = useState(false);

    const closePropertyForm = () => {
        setOpenPropertyForm(false)
    }

    if(openPropertyForm)
        return(
            <PropertyForm 
            property= {''} 
            closePropertyForm = {closePropertyForm}
            submitCreate = {submitCreate}
             />
        )
    return(
        <Button color ='success' onClick ={ () => setOpenPropertyForm(true)}> +New Property </Button>
    )
}

export default ToggleAblePropertyForm;