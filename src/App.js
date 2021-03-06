import './App.css';
import './styles/styles.css';
import Home from './components/home'
import "aos/dist/aos.css";
import Aos from 'aos';
import React,{useEffect, useState} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { css } from "@emotion/react";
import Team from './components/team';
import { BrowserRouter as Router,Switch,Link,Route } from "react-router-dom";
import Banner from './components/banner'
import About from './components/about';
import Nav from './components/nav';
import Footer from './components/footer'
import FloatingActionButtons from './components/float';
import NavMob from './components/navmob';
import Sponsors from './components/sponsors';
import Slider from './components/slider';
import {GalleryData,AudioVideoRefData} from './components/data';
import Bggallery from './background/asset7.png';
import Bggallery1 from './background/asset10.jpg';
import Contact from './components/contact';
import VerticalTab from './components/verticaltab';
import Branch from './components/branch';
import Activities from './components/activities';
import NewsEvent from './components/newsevent';
import ImpLinks from './components/imp_links';
function App() {
  useEffect(()=>{
    Aos.init({
        duration:1500,
    });
},[])
const[loading,setLoding]=useState(true);
setTimeout(()=>{
  setLoding(false);
},2000)

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: orange;
// `;
  return (
    
     <div className='container'>

       {loading?<h1 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}><PropagateLoader  color="#00eaa1"  size={25}/></h1>:(
        
         <div>
           <Nav className='desktop'/>
        <NavMob className='mobile'/>
        <Banner/>
        <Branch/>
        <About/>
        <Activities/>
        <VerticalTab/>
        <Slider title='Gallery' data={GalleryData} Bg={Bggallery}/>
        <NewsEvent/>
        <Slider title='Audio Video Blogs & Significant Video References' data={AudioVideoRefData} Bg={Bggallery1}/>

       
        <Contact id="contact"/>
        

        <Sponsors/>
        <ImpLinks/>
        <Footer/>
        <FloatingActionButtons/>

        
        

       
        </div>
        
       )}
           
           
     </div>
    
  );
}

export default App;
