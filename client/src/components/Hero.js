import React from 'react';
import Nav from './Nav';

const Hero = ()=>{
return (
<div className="jumbotron-fluid">
<Nav />
<a href="/progress.html" className="buttonbgd">
    <button className="button"><span>Track Your Progress</span></button>
</a>
  
</div>
)
};

export default Hero;