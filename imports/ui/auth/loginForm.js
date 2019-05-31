import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const LoginForm = () => {

    const handleSubmit = e => {

    }
    return(
        <div> 
            <Container>
                <Row>
                    <Col xs="6" md='5'> 
                        <div> 
                            <p> 
                                PropMan is a basic property management app dedicated to managing your properties like
                                real housing estate, shopping complex and its tenants. collecting and managing rents etc.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className = 'form'>
                            <Form onSubmit = {handleSubmit}  > 
                                <FormGroup>
                                    <Label for= 'email'> User name </Label>
                                    <Input name='userName' required placeholder = 'Enter email' onChange={e => {}} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'>Password </Label>
                                    <Input type = 'password' required name='password' placeholder = 'Enter password' 
                                    onChange={e => {}} />
                                </FormGroup> <br />
                                <Button> login </Button> {" "} <Link to= '/signup'> Don't have an account? </Link> <br />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm;