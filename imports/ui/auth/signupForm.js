import React, {useState} from 'react';
import {Form, Input, FormGroup, Label, Container, Row, Col, Button, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {signup} from './dataProvider';

const SignupForm = (props) => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState({});
    const[isError, setIsError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const validationErrors = validation({username, email, password});
        setErrors(validationErrors);
        if(Object.getOwnPropertyNames(validationErrors).length > 0 ){
            return;
        }else
        signup({username, email, password})
        .then(response => {
            if(response.status === 'success'){
                props.history.push('/login');
            }
            setIsError(true);
        })
    }
    const validation = (user) => {
        const errors = {};

        if(!user.username )
            errors.password = 'username is required';
        if(!user.email || !/\S+@\S+\.\S+/.test(user.email) )
            errors.email = 'valid email required';
        if(!user.password)
            errors.password = 'password is required';
        return errors;

    }
    return(
        <div className= 'authForm'>
            <Container>
                <Row>
                    <Col xs="12" md='5'> 
                        <div> 
                            <h3>PropMan </h3>
                            <p> 
                                PropMan is a basic property management app that allow users to properly manage their properties like
                                real housing estate, shopping complex and its tenants. collecting and managing rents etc.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md='7'>

                        <div className= 'form'>
                            {isError ? <Alert color= 'danger'>oops!, error creacting account!. </Alert> : ''}
                            <Form onSubmit = {handleSubmit} >
                                <FormGroup>
                                    <Label for ='userName'>User Name </Label> 
                                    <Input name='userName' value={username} required placeholder = 'Enter userName' required onChange={e => setUsername(e.target.value) }/> 
                                    <span style={{ color: 'red' }}>{ errors.username }</span> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='email'> Email </Label>
                                    <Input name='email' required type='email' value={email} required placeholder = 'Enter email' onChange={e => setEmail(e.target.value) }/>
                                    <span style={{ color: 'red' }}>{ errors.email }</span> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'> Password </Label>
                                    <Input type = 'password' required name='password' value={password} required placeholder = 'Enter password' onChange={e => setPassword(e.target.value)} />
                                    <span style={{ color: 'red' }}>{ errors.password }</span> 
                                </FormGroup >
                                <Button color='info'> Signup </Button> {" "} <Link to= '/login'> Already have an account? </Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
    
        </div>
    )
} 
export default SignupForm;