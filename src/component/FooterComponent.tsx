import React from 'react';
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div>
            <Link to='users'>Users Page</Link>
            <br/>
            <Link to='/'>Home Page</Link>
            <br/>
            <Link to='posts'>Posts Page</Link>
            <br/>
            <Link to='comments'>Comments Page</Link>
            <hr/>
        </div>
    );
};

export default FooterComponent;