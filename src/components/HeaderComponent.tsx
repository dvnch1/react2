import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <br/>
            <Link to="users">User Page</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;