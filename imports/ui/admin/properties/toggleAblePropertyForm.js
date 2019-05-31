import React, {useState} from 'react';
import {Button} from 'reactstrap';
import PropertyForm from './propertyForm';

const ToggleAblePropertyForm = () => {
    const[openPropertyForm, setOpenPropertyForm] = useState(false);

    const closePropertyForm = () => {
        setOpenPropertyForm(false)
    }

    if(openPropertyForm)
        return(
            <PropertyForm closePropertyForm = {closePropertyForm} />
        )
    return(
        <Button color ='success' onClick ={ () => setOpenPropertyForm(true)}> +New Property </Button>
    )
}

export default ToggleAblePropertyForm;