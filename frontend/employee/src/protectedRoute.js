import { Route, Navigate } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')
    return <Route {...rest} render={props => (!token ? (<Navigate to='/' />) : (<Component {...props} />))}>

    </Route>
}

export default ProtectedRoute