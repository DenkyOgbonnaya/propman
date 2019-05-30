import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import SignUpForm from './auth/signupForm'
//const SignUpForm = lazy( () => import('./auth/signupForm'));
const RoutesContainer = () => {
    return(
        <Suspense fallback = 'Loading...'> 
            <Switch> 
                <Route exact path = '/' component = {SignUpForm} />
            </Switch>

        </Suspense>
    )
}

export default RoutesContainer;