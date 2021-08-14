import AboutCard from './aboutcard';

const About=()=>{
   
     return(
         <div className='about' id="about">
             <h2><span>About</span></h2>
             <p data-aos="fade-up">Start up and Centre for Innovation & Design(SCID), NIT Agartala is a nonprofit centre at NIT Agartala to promote Innovation and Entrepreneurship. It provides a platform for start-ups by budding Entrepreneurs and Intrapreneurs to convert their innovative ideas into commercially viable products. It also provides services related to patenting and commercialization.</p>
             <AboutCard img='./assets/asset3.jpg' title='Vision' text='To be a centre of excellence as Innovation and Startup Centre and to build innovative ecosystem with interdisciplinary knowledge, human values, professional ethics and self reliance among the students and technocrats and contributing to both regional , national economy and society.' />
             <AboutCard img='./assets/asset4.jpg' title='Mission' text={["Our salient Missions are :",<ul><li>To be a centre of excellence in supporting Startup and innovation ecosystem in the region</li><li>To nurture and sustain an academic ambience and entrepreneurship among students and technocrats for sustainable development in the region and to accomplish its integration globally.</li></ul>]} />
             <AboutCard img='./assets/asset5.jpg' title='Objective' text={["  Centre for Innovation and Design, NIT Agartala has listed the following objectives:",<ul><li>To build a strong innovation culture and atmosphere for innovation at NIT Agartala</li><li> Interfacing and Networking between academic, R & D institutions, industries and financial institutions.</li><li> To set up incubator facilities, provide cost effective infrastructural support and value-added services to startups like mentoring, legal, financial, technical and intellectual property.</li></ul>]} />
         </div>    
     )
}

export default About;