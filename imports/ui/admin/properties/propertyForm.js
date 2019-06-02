import React, {useState} from 'react';
import {useGlobal} from 'reactn';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PropertyForm = ({property, closePropertyForm, submitCreate, submitUpdate}) => {

    const[name, setName] = useState(property.name || '');
    const[status, setStatus] = useState(property.status || 'Available');
    const[address, setAddress] = useState(property.address || '');
    const[city, setCity] = useState(property.city || '');
    const[state, setState] = useState(property.state || '');
    const[rent, setRent] = useState(property.rent || '');
    const[specs, setSpecs] = useState(property.specs || '');
    const[type, setType] = useState(property.type || '');
    const[image, setImage] = useState(property.image || '' );
    const[userData] = useGlobal('userData');

    const handleSubmit = e => {
        e.preventDefault();
        const attributes = {name, status, address, city, state, rent, specs, image, type, owner: userData.userId}
        if(!property._id){
            createSubmit(attributes);
            closePropertyForm();
        }else{
        //TODO: update property
            updateSubmit({...{_id: property._id}, ...attributes});
            closePropertyForm();
        }
    }
    const createSubmit = property => {
        submitCreate(property);
    }
    const updateSubmit = property => {
        submitUpdate(property);
    }
    return(
        <div> 
            <Form onSubmit= {handleSubmit} >
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input  name="name" value= {name} onChange= { e => setName(e.target.value)}  placeholder="Enter property name" required />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="status">status</Label>
                            <Input type='select' name="status" value= {status} onChange= { e => setStatus(e.target.value)} required  > 
                                <option>Available </option>
                                <option>Occupied </option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="type">Type</Label>
                            <Input type="text" name="type" value= {type} onChange= {e => setType(e.target.value)} placeholder='eg estate' required />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="price">Rent</Label>
                            <Input type="text" name="rent" value= {rent} onChange= {e => setRent(e.target.value)} placeholder = 'enter rent' required />
                        </FormGroup>  
                    </Col>
                </Row>
                        <FormGroup>
                            <Label for="ddress">Address</Label>
                            <Input  name="address" value= {address} onChange= {e => setAddress(e.target.value)} placeholder='enter address' required />
                        </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" value= {city} onChange= {e => setCity(e.target.value)} required />
                        </FormGroup>
                    </Col>
                     <Col md={6}>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="text" name="state" value= {state} onChange= {e => setState(e.target.value)} required />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="specs">Specificaion </Label>
                    <Input type="textarea" name="specs" id="about" placeholder='e.g 2 bedroom, swimming pool,etc'
                    value= {specs} onChange= {e => setSpecs(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label for="ddress">picture</Label>
                    <Input type='file'  name="image" accept='image/*'  onChange = { e => setImage(e.target.files[0])}  disabled = {property._id ? true : false } required />
                </FormGroup>
                <Button color= 'success' > { property._id ? 'Save' : 'Add'} </Button>
            </Form>
            <br />
            <Button color= 'warning' onClick ={ () => closePropertyForm()}> Cancel </Button>
        </div>
    )
}

export default PropertyForm;