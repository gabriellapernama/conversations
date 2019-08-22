import React from 'react';
import {Link} from 'gatsby';

export default () => {
    return <div style={{color: 'light blue', fontSize: '24px'}}>
        <div><Link to="/">Home</Link></div>
        Hello from About.js! 
    </div>
}