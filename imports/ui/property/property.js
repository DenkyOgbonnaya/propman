import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const Property = ({property}) => {

    return(
        <Card> 
            <CardImg top width="100%" height="150px" src={property.image}  alt="property DP" />
            <CardBody> 
                <CardTitle> {property.name} </CardTitle>
                <CardSubtitle> <small className="text-muted">Rent: {property.rent}</small> </CardSubtitle>
               <CardText> <small className="text-muted">{property.specification}</small> </CardText>
            </CardBody>
        </Card>
    )
}

export default Property;