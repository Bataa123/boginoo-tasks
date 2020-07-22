import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../authUserProvider';

export const SwithPath = () => {
    const location = useLocation();
    const { takeUrl } = useContext(userContext);

    if (location.pathname !== "/") {
        takeUrl(location.pathname.slice(1));
    }

    return (
        <div>
            Loading......
        </div>
    )
}


