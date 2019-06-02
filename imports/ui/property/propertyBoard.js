import React, {useState, useEffect} from 'react';
import {useGlobal} from 'reactn';
import {Button} from 'reactstrap';
import PropertyList from './propertyList';
import {getProperties} from '../admin/properties/dataProvider';
import Spinnar from '../utils/spinner';


const PropertyBoard = (props) => {
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
    return(
        <div className='clearfix'> 
            <Button className="btn btn-info float-right " onClick= {() => props.history.push('/admin/properties')} >Manage Properties </Button>
            <br />
            {
                loading ? <Spinnar /> :
                <PropertyList properties = {properties} />
            }
    
        </div>
    )
}
export default PropertyBoard;