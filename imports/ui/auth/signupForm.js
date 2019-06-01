import React, {useState} from 'react';
import {Form, Input, FormGroup, Label, Container, Row, Col, Button, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {signup} from './dataProvider';

const SignupForm = (props) => {
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isError, setIsError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        signup({userName, email, password})
        .then(response => {
            console.log(response)
            if(response.status === 'success'){
                props.history.push('/login');
            }
            setIsError(true);
        })
    }
    return(
        <div className= 'd-flex align-items-center'>
            <Container>
                <Row>
                    <Col xs="12" md='5'> 
                        <div> 
                            <h3>PropMan </h3>
                            <p> 
                                PropMan is a basic property management app dedicated to managing your properties like
                                real housing estate, shopping complex and its tenants. collecting and managing rents etc.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md='7'>

                        <div >
                            {isError ? <Alert color= 'danger'>oops!, error creacting account!. </Alert> : ''}
                            <Form onSubmit = {handleSubmit} >
                                <FormGroup>
                                    <Label for ='userName'>User Name </Label> 
                                    <Input name='userName' value={userName} required placeholder = 'Enter userName' required onChange={e => setUserName(e.target.value) }/> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='email'> Email </Label>
                                    <Input name='email' required type='email' value={email} required placeholder = 'Enter email' onChange={e => setEmail(e.target.value) }/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for ='password'> Password </Label>
                                    <Input type = 'password' required name='password' value={password} required placeholder = 'Enter password' onChange={e => setPassword(e.target.value)} />
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