import React from 'react';
import './NotFound.css'

const Notfound = () => {
    return (
        <div className="notFound text-center">
            <a href="/" className="btn">Go to Home</a>
            <br/>
            <br/>
            <h2>Page not found</h2>
            <p>404 error</p>
        </div>
    );
};

export default Notfound;
