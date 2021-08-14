import {Carousel} from '3d-react-carousal';
// import Bg from '../background/asset6.png';


  const Slider=({title,data,Bg})=>{
    return(
      <div id="gallery" className="slider" style={{backgroundImage:`url(${Bg})`}}>
             <h2><span>{title}</span></h2>
           <div className='carousel'>
              <Carousel slides={data}  />
           </div>
      </div>
    )
  }
  

  export default Slider;