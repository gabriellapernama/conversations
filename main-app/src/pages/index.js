import React from "react";
import Header from '../components/header.js'; 
import {Link} from 'gatsby';

export default () => {
return <div style={{color: `purple`, fontSize: `24px`}}>
    <Header headerText="Home"/>
    <Link to="/contact/">Contact us today!</Link> 
    <br/>
    <Link to="/about/">About Me</Link>
    <br/><img src="https://source.unsplash.com/random/400x200" alt=""/>
</div>
}
