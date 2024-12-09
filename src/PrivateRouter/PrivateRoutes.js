import React, { useContext } from 'react';
import { Authcontex } from '../contex/Contex';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(Authcontex)

    if (loading) {
        return <Spinner animation="border" variant="primary" />
        
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;