import React, {useState, useEffect} from 'react';
import EditablePropertyList from './editablePropertyList';
import ToggleAblePropertyForm from './toggleAblePropertyForm';
import {fileToBase64} from './helper';
import {addProperty, getProperties} from './dataProvider';

const properties =[
    {_id: 'udj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'jjf', name: 'House on water', price: '700,000', status: 'Occupied'},
    {_id: 'uddkksj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'udllalj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'udeowj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'u;;fdj', name: 'House on a hill', price: '500,000', status: 'Available'},
]
const PropertyBoard = () => {
    const[properties, setProperties] = useState([]);

    useEffect( () => {
        getProperties()
        .then(response => {
            if(response.status === 'success'){
                setProperties(response.data);
            }
        })
    }, []);
    const handleCreateSubmit = (property) => {
        createProperty(property);
    }
    async function createProperty(property){
        try{
            const base64Image = await fileToBase64(property.image);
            const response = await addProperty({...property, ...{image: base64Image} });

            if(response.status === 'success'){
                setProperties(properties.concat(response.data))
            }
        }catch(err){}
    }
    return(
        <div> 
            <div> 
                <h3>Manage Properties </h3>
                <ToggleAblePropertyForm
                    submitCreate = {handleCreateSubmit}
                 />
                <br />
                <EditablePropertyList properties = {properties}/>
            </div>
        </div>
    )
}

export default PropertyBoard;