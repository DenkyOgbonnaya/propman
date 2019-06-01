import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PropertyForm = ({property, closePropertyForm}) => {

    const[name, setName] = useState(property.name || '');
    const[status, setStatus] = useState(property.status || '');
    const[address, setAddress] = useState(property.address || '');
    const[city, setCity] = useState(property.city || '');
    const[state, setState] = useState(property.state || '');
    const[price, setPrice] = useState(property.price || '');

    const handleSubmit = e => {
        e.preventDefault();

        if(!property._id){
            //TODO: create new property
            closePropertyForm();
        }
        //TODO: update property
        closePropertyForm();
    }
    return(
        <div> 
            <Form onSubmit= {handleSubmit} >
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input  name="name" value= {name} onChange= { e => setName(e.target.value)}  placeholder="Enter property name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="status">status</Label>
                            <Input type='select' name="status" value= {status} onChange= { e => setStatus(e.target.value)}  > 
                                <option>Available </option>
                                <option>Occupied </option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                        <FormGroup>
                            <Label for="ddress">Address</Label>
                            <Input  name="address" value= {address} onChange= {e => setAddress(e.target.value)} placeholder='property address' />
                        </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" value= {city} onChange= {e => setCity(e.target.value)}/>
                        </FormGroup>
                    </Col>
                     <Col md={4}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" value= {state} onChange= {e => setState(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="text" name="price" value= {price} onChange= {e => setPrice(e.target.value)} />
                        </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="ddress">pictuire</Label>
                    <Input type='file'  name="image"  />
                </FormGroup>
        
                <Button color= 'success' > { property._id ? 'Save' : 'Add'} </Button>
            </Form>
            <br />
            <Button color= 'warning' onClick ={ () => closePropertyForm()}> Cancel </Button>
        </div>
    )
}

export default PropertyForm;