import React, {useState, useEffect} from 'react';
import EditablePropertyList from './editablePropertyList';
import ToggleAblePropertyForm from './toggleAblePropertyForm';

const properties =[
    {_id: 'udj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'jjf', name: 'House on water', price: '700,000', status: 'Occupied'},
    {_id: 'uddkksj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'udllalj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'udeowj', name: 'House on a hill', price: '500,000', status: 'Available'},
    {_id: 'u;;fdj', name: 'House on a hill', price: '500,000', status: 'Available'},
]
const PropertyBoard = () => {

    return(
        <div> 
            <div> 
                <h3>Manage Properties </h3>
                <ToggleAblePropertyForm />
                <br />
                <EditablePropertyList properties = {properties}/>
            </div>
        </div>
    )
}

export default PropertyBoard;