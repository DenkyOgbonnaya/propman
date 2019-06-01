import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
const SignUpForm = lazy( () => import('./auth/signupForm'));
const LoginForm = lazy( () => import('./auth/loginForm'));
const PropertyBoard = lazy( () => import('./property/propertyBoard'));
const AdminPropertyBoard = lazy( () => import('./admin/properties/propertyBoard'));
const RoutesContainer = () => {
    return(
        <Suspense fallback = 'Loading...'> 
            <Switch> 
                <PrivateRoute exact path = '/' component = {PropertyBoard} />
                <PrivateRoute exact path = '/admin/Properties' component = {AdminPropertyBoard} />
                <Route exact path = '/login' component = {LoginForm} />
                <Route exact path = '/signup' component = {SignUpForm} />
            </Switch>

        </Suspense>
    )
}

export default RoutesContainer;