import Banner from './banner'
import About from './about';
import Nav from './nav';
import Footer from './footer'
import FloatingActionButtons from './float';
import NavMob from './navmob';
import Sponsors from './sponsors';
import Slider from './slider';
import {GalleryData,AudioVideoRefData} from './data';
import Bggallery from '../background/asset7.png';
import Bggallery1 from '../background/asset10.jpg';
import Contact from './contact';
import VerticalTab from './verticaltab';
import Branch from './branch';
import Activities from './activities';
import NewsEvent from './newsevent';

const Home=()=>{
  return(
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
        <Footer/>
        <FloatingActionButtons/>
      </div>
  )
}
export default Home;