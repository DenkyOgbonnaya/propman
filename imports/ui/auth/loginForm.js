import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const LoginForm = () => {

    const handleSubmit = e => {

    }
    return(
        <div> 
            <div className = 'form'>
                    <h5>Login to Propman </h5> <br />
                    <Form onSubmit = {handleSubmit}  > 
                        <FormGroup>
                            <Label for= 'email'> Email </Label>
                            <Input name='email' required placeholder = 'Enter email' onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for ='password'>Password </Label>
                            <Input type = 'password' required name='password' placeholder = 'Enter password' 
                            onChange={e => setPassword(e.target.value)} />
                        </FormGroup> <br />
                        <Button> login </Button> {" "} <Link to= '/signup'> Don't have an account? </Link> <br />
                    </Form>
                </div>
        </div>
    )
}

export default LoginForm;