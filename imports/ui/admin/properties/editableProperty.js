import React, {useState} from 'react';
import PropertyForm from './propertyForm';
import {Button} from 'reactstrap';

const EditableProperty = ({property, submitUpdate}) => {
    const[openPropertyForm, setOpenPropertyForm] = useState((false));

    const closePropertyForm = () => {
        setOpenPropertyForm(false)
    }

    if(openPropertyForm)
        return(
            <tr> 
                <td> 
                <PropertyForm 
                    property= {property} 
                    closePropertyForm = {closePropertyForm}
                    submitUpdate= {submitUpdate}
                />
                </td>
            </tr>
        )   
    return(
        <tr> 
            <td>{property.name} </td>
            <td>{property.price} </td>
            <td>{property.status} </td>
            <td> <Button color= 'info' onClick = { () => setOpenPropertyForm(true)}> Update </Button> </td>
        </tr>
    )

}

export default EditableProperty;