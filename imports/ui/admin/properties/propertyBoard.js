import React, {useState, useEffect} from 'react';
import EditablePropertyList from './editablePropertyList';
import ToggleAblePropertyForm from './toggleAblePropertyForm';
import {fileToBase64} from './helper';
import {addProperty, getProperties, updateProperty} from './dataProvider';

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
    const handleCreateSubmit = property => {
        createProperty(property);
    }
    const handleUpdatesubmit = property => {
        updateProp(property);
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
    const updateProp = property => {
        setProperties( properties.map(prop => prop._id === property._id ? Object.assign({}, prop, property) : prop))

        updateProperty()
        .then(response => {
            if(response.status === 'success'){
                setProperties( properties.map(prop => prop._id === property._id ? Object.assign({}, prop, response.data) : prop))
            }
        })
    }
    return(
        <div> 
            <div> 
                <h3>Manage Properties </h3>
                <ToggleAblePropertyForm
                    submitCreate = {handleCreateSubmit}
                 />
                <h4>Existing </h4>
                <EditablePropertyList 
                properties = {properties}
                submitUpdate = {handleUpdatesubmit}
                />
            </div>
        </div>
    )
}

export default PropertyBoard;