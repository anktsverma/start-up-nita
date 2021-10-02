import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
  const[navbar,setNavbar]=useState(false);
  
  const changeBackground=()=>{
    if(window.scrollY>=100){
        setNavbar(true);
    }
    else{
        setNavbar(false);
    }
  }

  
  

  window.addEventListener('scroll',changeBackground);
   return (
       <div className={navbar?'navbar active':'navbar'}>
          <div><img src="assets/asset1.png" /></div>
          <div className='menu' id="menua">
                  <h3 className="nav-links"><a  href="#banner">Home</a></h3>
                   <h3 className="nav-links"><a href="#about">About</a></h3>
                   <h3 className="nav-links"><a href="#activities">Activity</a></h3>
                   <h3 className="nav-links"><a href="#gallery">Gallery</a></h3>
                   <h3 className="nav-links"><a href="#newsevent">News & Events</a></h3>
                  <h3 className="nav-links"><a href="#contact">Contact</a></h3>
                  <h3 className="nav-links"><a href="#sponsor">Our Sponsors</a></h3>
                  <h3 className="nav-links"><a href="#ImpLinks">Important Links</a></h3>
          </div>
       </div>
   )
}



export default Nav;