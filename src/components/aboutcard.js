import React,{useEffect} from 'react'
import Aos from 'aos';
const AboutCard=(props)=>{
    useEffect(()=>{
        Aos.init({
            duration:1500,
        });
    },[])
   return(
    <div  className="aboutcard">
        <div ><img data-aos="fade-up" className="aboutcardimg" src={props.img} /></div>
        <div >
            <div><h3 data-aos="fade-up">{props.title}</h3></div>
            <div><p data-aos="fade-up">{props.text}</p></div>
        </div>
    </div>
   )
}
export default AboutCard