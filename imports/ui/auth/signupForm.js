import React from 'react';
import {Form, Input, FormGroup, Label, Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const SignupForm = () => {

    const handleSubmit = e => {

    }
    return(
        <div clssName= 'd-flex align-items-center'>
            <Container>
                <Row>
                    <Col xs="6" md='5'> 
                        <div> 
                            <h3>PropMan </h3>
                            <p> 
                                PropMan is a basic property management app dedicated to managing your properties like
                                real housing estate, shopping complex and its tenants. collecting and managing rents etc.
                            </p>
                        </div>
                    </Col>
                    <Col xs="6" md='7'>

                        <div >
                            <Form onSubmit = {handleSubmit} >
                                <FormGroup>
                                    <Label for ='userName'>User Name </Label> 
                                    <Input name='userName' required placeholder = 'Enter userName' onChange={e => {}} /> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='email'> Email </Label>
                                    <Input name='email' required type='email' placeholder = 'Enter email' onChange={e => {}} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'> Password </Label>
                                    <Input type = 'password' required name='password' placeholder = 'Enter password' onChange={e => {}} />
                                </FormGroup >
                                <Button> Signup </Button> {" "} <Link to= '/login'> Already have an account? </Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
    
        </div>
    )
}
export default SignupForm;