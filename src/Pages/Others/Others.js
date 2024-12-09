import React from 'react';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <p>Go back to Registration: <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default Others;