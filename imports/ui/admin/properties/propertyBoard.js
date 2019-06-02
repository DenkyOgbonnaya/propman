import React, {useState, useEffect} from 'react';
import EditablePropertyList from './editablePropertyList';
import ToggleAblePropertyForm from './toggleAblePropertyForm';
import {fileToBase64} from './helper';
import {addProperty, getProperties, updateProperty} from './dataProvider';
import {useGlobal} from 'reactn';
import Spinnar from '../../utils/spinner';

const PropertyBoard = () => {
    const[properties, setProperties] = useState([]);
    const[userData] = useGlobal('userData');
    const[loading, setLoading] = useState(true);

    useEffect( () => {
        getProperties(userData.userId)
        .then(response => {
            if(response.status === 'success'){
                setProperties(response.data);
                setLoading(false);
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
        const{userId, authToken} = userData;
        try{
            const base64Image = await fileToBase64(property.image);
            const response = await addProperty({...property, ...{image: base64Image} }, {userId, authToken});

            if(response.status === 'success'){
                setProperties(properties.concat(response.data))
            }
        }catch(err){}
    }
    const updateProp = property => {

        const{userId, authToken} = userData;
        setProperties( properties.map(prop => prop._id === property._id ? Object.assign({}, prop, property) : prop))

        updateProperty(property._id, property, {userId, authToken})
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
                 <br />

                <h4>Existing </h4>
                {
                    loading ? <Spinnar /> :
                    <EditablePropertyList 
                        properties = {properties}
                        submitUpdate = {handleUpdatesubmit}
                    />

                }
                
            </div>
        </div>
    )
}

export default PropertyBoard;