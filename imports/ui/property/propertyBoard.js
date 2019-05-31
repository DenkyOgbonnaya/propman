import React, {state, useEffect} from 'react';
import {Button} from 'reactstrap';
import PropertyList from './propertyList';

const properties = [
    {_id: 'udj', name: 'House on a hill', description: 'This house is on a fucking Hill'},
    {_id: 'jjf', name: 'House on water', description: 'two bedroom flat beside   a fucking water'},
    {_id: 'uddkksj', name: 'House on a hill', description: 'This house is on a fucking Hill'},
    {_id: 'udllalj', name: 'House on a hill', description: 'This house is on a fucking Hill'},
    {_id: 'udeowj', name: 'House on a hill', description: 'This house is on a fucking Hill'},
    {_id: 'u;;fdj', name: 'House on a hill', description: 'This house is on a fucking Hill'},

]
const PropertyBoard = () => {
    return(
        <div className='clearfix'> 
        <Button className="btn btn-info float-right ">Manage Properties </Button>
        <br />
        <PropertyList properties = {properties} />

        </div>
    )
}
export default PropertyBoard;