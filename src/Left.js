import React from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/chat1">Chat1</Link></li>
                <li><Link to="/chat2">Chat2</Link></li>
            </ul>
            <hr/>
        </div>
    );
};
export default Left;