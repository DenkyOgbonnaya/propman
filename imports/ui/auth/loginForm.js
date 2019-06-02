import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Container, Row, Col, Button, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useGlobal} from 'reactn';
import {login} from './dataProvider';

const LoginForm = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isError, setIsError] = useState(false);
    const[userData, setUserData] = useGlobal('userData');

    const handleSubmit = e => {
        e.preventDefault();
        const {from} = props.location.state || {from : {pathName: '/' }};

        login({email, password})
        .then(response => {
            if(response.status === 'success'){
                setUserData(response.data)
                props.history.push(from.pathname || from.pathName);
            }else
            setIsError(true);
        })

    }
    return(
        <div> 
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
                    <Col>
                        <div className = 'form'>
                            {isError ? <Alert color= 'danger'>Error: invalid email and password combination!. </Alert> : ''}  
                            <Form onSubmit = {handleSubmit}  > 
                                <FormGroup>
                                    <Label for= 'email'> Email </Label>
                                    <Input name='email' type='email' value={email} required placeholder = 'Enter email' onChange={e => setEmail(e.target.value) } />
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'>Password </Label>
                                    <Input type = 'password' required name='password' value={password} placeholder = 'Enter password' 
                                    onChange={e => setPassword(e.target.value)} />
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