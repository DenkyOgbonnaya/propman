import React from 'react';
import {Table, Button} from 'reactstrap';
import EditableProperty from './editableProperty';

const EditablePropertyList = ({properties, submitUpdate}) => {

    return(
        <div> 
            <Table responsive size='sm'> 
                <thead> 
                    <tr> 
                        <th> Name</th>
                        <th> Type</th>
                        <th> Rent</th>
                        <th> Status</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        properties.map(property => 
                            <EditableProperty
                                key= {property._id}
                                property = {property}
                                submitUpdate = {submitUpdate}
                             />
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default EditablePropertyList;