import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

const Property = ({property}) => {

    return(
        <Card> 
            <CardImg top width="100%" height="150px" src=''  alt="property DP" />
            <CardBody> 
                <CardTitle> {property.name} </CardTitle>
               <CardText> {property.description} </CardText>
            </CardBody>
        </Card>
    )
}

export default Property;