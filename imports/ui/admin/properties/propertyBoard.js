import React, {useState, useEffect} from 'react';
import EditablePropertyList from './editablePropertyList';
import ToggleAblePropertyForm from './toggleAblePropertyForm';
import {fileToBase64} from './helper';
import {addProperty, getProperties, updateProperty} from './dataProvider';
import {useGlobal} from 'reactn';
import Spinnar from '../../utils/spinner';
import Swal from 'sweetalert2';

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
        updatePropty(property);
    }
    async function createProperty(property){
        const{userId, authToken} = userData;
        try{
            const base64Image = await fileToBase64(property.image);
            const response = await addProperty({...property, ...{image: base64Image} }, {userId, authToken});

            if(response.status === 'success'){
                setProperties(properties.concat(response.data))
                Swal.fire('New Property', 'Property successfully added!')
            }
        }catch(err){}
    }
    const updatePropty = property => {

        const{userId, authToken} = userData;
        setProperties( properties.map(prop => prop._id === property._id ? Object.assign({}, prop, property) : prop));
        Swal.fire('Updated Property', 'Property successfully updated!');

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
                 <hr />

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