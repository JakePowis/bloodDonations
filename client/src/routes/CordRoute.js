import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const CordRoute = ({
    component: Component,
    isAuthenticated,
    userLevel,
    ...rest
}) => (
    <Route {...rest} component={(props)=> 
            isAuthenticated &&  userLevel!=='none' ? (
                <Component {...props} />
            ):(
                <Redirect to="/login" />
            )
    } />

)
export default CordRoute