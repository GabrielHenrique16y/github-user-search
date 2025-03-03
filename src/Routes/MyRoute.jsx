import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ children, IsClosed }) {
    const isLoggedIn = false;
    const location = useLocation();

    if (IsClosed && !isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ prevPath: location.pathname }}
                replace
            />
        );
    }

    return children;
}

MyRoute.defaultProps = {
    IsClosed: false,
};

MyRoute.propTypes = {
    children: PropTypes.node.isRequired,
    IsClosed: PropTypes.bool,
};
