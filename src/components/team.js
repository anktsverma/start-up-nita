import {LinkedIn,Language}  from '@material-ui/icons';

const Team=()=>{
   return (
           <div className="team">
               <div className="teamcard">
               <img src="assets/sumandeb.jpg"/>
               <h2>Dr. Suman Deb</h2>
               <h4>Mentor-IIC & E-Cell NIT Agartala</h4>
               <button ><Language style={{fontSize: '20px',color:'#0077B5'}}/><a href="https://www.sumandeb.com/">Connect</a></button>
           </div>
           
           <div className="teamcard">
               <img src="assets/amit.jpg"/>
               <h2>Amit Kumar</h2>
               <h4>Web Developer</h4>
               <button ><LinkedIn style={{fontSize: '20px',color:'#0077B5'}}/><a href="https://www.linkedin.com/in/amit-kumar-6bb7061a1/">Connect</a></button>
           </div>

           <div className="teamcard">
               <img src="assets/ankit.jpg"/>
               <h2>Ankit Kumar</h2>
               <h4>Web Developer</h4>
               <button ><LinkedIn style={{fontSize: '20px',color:'#0077B5'}}/><a href="https://www.linkedin.com/in/ankit-k-876824108/">Connect</a></button>
           </div>
           
           </div>
   )
}

export default Team;

