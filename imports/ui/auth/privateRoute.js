import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useGlobal } from 'reactn';

const PrivateRoute = ({component: Component, ...rest}) => {
    const[userData] = useGlobal('userData');

    return(
        <Route {...rest} render = {(props) => (
            userData.authToken ? <Component {...props} /> : <Redirect to = {{
                pathname: '/login',
                state: {from: props.location}
            }} />
        )} />
    )
}

export default PrivateRoute;