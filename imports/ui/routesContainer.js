import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
const SignUpForm = lazy( () => import('./auth/signupForm'));
const LoginForm = lazy( () => import('./auth/loginForm'));
const PropertyBoard = lazy( () => import('./property/propertyBoard'));
const RoutesContainer = () => {
    return(
        <Suspense fallback = 'Loading...'> 
            <Switch> 
                <Route exact path = '/' component = {PropertyBoard} />
                <Route exact path = '/login' component = {LoginForm} />
            </Switch>

        </Suspense>
    )
}

export default RoutesContainer;