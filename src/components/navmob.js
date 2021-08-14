import MenuIcon from '@material-ui/icons/Menu';
import { useState ,useEffect} from 'react';


const Navmob=()=>{
   
    const[click,setClick]=useState(false);
    // const displaymenu=()=>{
    //     let a=document.getElementById("menumob").style.display;
    //     a=='none'?document.getElementById("menumob").style.display="flex":document.getElementById("menumob").style.display="none";
    // }
    const clickHandler=()=>{
    if(!click){
        
        let length=document.getElementsByClassName("menumobe").length;
        for(let i=0;i<length;i++)
        {
            document.getElementsByClassName("menumobe")[i].style.display="flex";
        }
        document.getElementById("menumob").style.height="50vh"
        console.log('height:300px')
    }
    else{
        let length=document.getElementsByClassName("menumobe").length;
        for(let i=0;i<length;i++)
        {
            document.getElementsByClassName("menumobe")[i].style.display="none";
        }
        document.getElementById("menumob").style.height="0px";
        console.log('height:00px')
        
    }
}
    return(
        <div className="menu-con-mob">
        <div className="navbarmob">
        <div><img src="assets/asset1.png" /></div>
        <MenuIcon onClick={()=>{
            if(!click){
                setClick(true)
                clickHandler()
            }
            else{
                setClick(false)
                clickHandler()
            }
        }
        }/>
        </div>
        <div id="menumob" >
      <h3 className="menumobe"><a  href="#banner">Home</a></h3>
      <h3 className="menumobe"><a href="#about">About</a></h3>
      <h3 className="menumobe"><a href="#activities">Activity</a></h3>
      <h3 className="menumobe"><a href="#gallery">Gallery</a></h3>
      <h3 className="menumobe"><a href="#newsevent">News & Events</a></h3>
      <h3 className="menumobe"><a href="#contact">Contact</a></h3>
      <h3 className="menumobe"><a href="#sponsor">Our Sponsors</a></h3>
     </div>
        </div>
     
    )
}

export default Navmob;