import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PropertyForm = ({closePropertyForm}) => {

    return(
        <div> 
            <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input  name="name"  placeholder="Enter property name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="status">status</Label>
              <Input type='select'  name="status" > 
                <option>Available </option>
                <option>Occupied </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="ddress">Address</Label>
          <Input  name="address" placeholder='property address' />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="text" name="price" />
            </FormGroup>  
          </Col>
        </Row>
        
        <Button color= 'success' > Save </Button>
      </Form>
      <br />
     <Button color= 'warning' onClick ={ () => closePropertyForm()}> Cancel </Button>
        </div>
    )
}

export default PropertyForm;