import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import { ArrowUpward } from '@material-ui/icons';


export default function FloatingActionButtons() {
  const[vis,setVis]=useState(false);
  const vissy=()=>{
      if(window.scrollY>=600){
          setVis(true);
      }
      else{
          setVis(false);
      }
  } 
  window.addEventListener('scroll',vissy)
  const clickHandler=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  return (
    <div className={vis?'float dis':'float'} onClick={clickHandler}>
      <Fab className="floatbtn" color="secondary" aria-label="add">
        <ArrowUpward />
      </Fab>
 
    </div>
  );
}
