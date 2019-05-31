import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Property from './property';

const PropertyList = ({properties}) => {

    return (
        <div className = 'propertyList'> 
            <Container> 
                <Row> 
                    {
                        properties.map(property =>
                            <Col xs='6' sm='4'
                                key= {property._id}>
                                <Property property = {property} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default PropertyList;