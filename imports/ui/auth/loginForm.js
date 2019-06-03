import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Container, Row, Col, Button, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useGlobal} from 'reactn';
import {login} from './dataProvider';

const LoginForm = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState({});
    const[isError, setIsError] = useState(false);
    const[userData, setUserData] = useGlobal('userData');

    const handleSubmit = e => {
        e.preventDefault();
        const {from} = props.location.state || {from : {pathName: '/' }};

        const validationErrors = validation({email, password});
        setErrors(validationErrors);
        if(Object.getOwnPropertyNames(validationErrors).length > 0){
            return
        }else
        login({email, password})
        .then(response => {
            if(response.status === 'success'){
                setUserData(response.data)
                props.history.push(from.pathname || from.pathName);
            }else
            setIsError(true);
        })

    }
    const validation = (user) => {
        const errors = {}
        if(!user.email || !/\S+@\S+\.\S+/.test(user.email) )
            errors.email = 'valid email required';
        if(!user.password)
            errors.password = 'password required';
        return errors;

    }
    return(
        <div className='authForm'> 
            <Container>
                <Row>
                    <Col xs="12" md='5'> 
                        <div className='form'> 
                            <h3>PropMan </h3> 
                            <p> 
                                PropMan is a basic property management app that allow users to properly manage their properties like
                                real housing estate, shopping complex and its tenants. collecting and managing rents etc.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md='5' >
                        <div className = 'form'>
                            {isError ? <Alert color= 'danger'>Error: invalid email and password combination!. </Alert> : ''}  
                            <Form onSubmit = {handleSubmit}  > 
                                <FormGroup>
                                    <Label for= 'email'> Email </Label>
                                    <Input name='email' type='email' value={email} required placeholder = 'Enter email' onChange={e => setEmail(e.target.value) } />
                                    <span style={{ color: 'red' }}>{ errors.email }</span> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'>Password </Label>
                                    <Input type = 'password' required name='password' value={password} placeholder = 'Enter password' 
                                    onChange={e => setPassword(e.target.value)} />
                                    <span style={{ color: 'red' }}>{ errors.password }</span> 
                                </FormGroup> <br />
                                <Button color= 'info'> login </Button> {" "} <Link to= '/signup'> Don't have an account? </Link> <br />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm;