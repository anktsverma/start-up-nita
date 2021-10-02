const GalleryData=[
     <img  src="assets/kapila.png" alt="10" className="sliderelements" />  ,
      <img  src="assets/gallery1.png" alt="9" className="sliderelements" />,
      <img  src="assets/gallery2.png" alt="8" className="sliderelements" />  ,
      <img  src="assets/gallery3.png" alt="7" className="sliderelements" />  ,
      <img  src="assets/gallery4.png" alt="6" className="sliderelements" />  ,
      <img  src="assets/gallery5.png" alt="5" className="sliderelements" /> ,
      <img  src="assets/gallery6.png" alt="4" className="sliderelements" />  ,
      <img  src="assets/gallery7.png" alt="3" className="sliderelements" />  ,
      <img  src="assets/gallery8.png" alt="2" className="sliderelements" />  ,
      <img  src="assets/gallery9.png" alt="1" className="sliderelements" />  ,
  
];

const AudioVideoRefData=[
  <iframe className="sliderelements" src="https://www.youtube.com/embed/7_0jtBBHvnI" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/NM-NOmM8ZNE" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/DhSpJPnIIdc" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/lCt3SXNXg1E" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/TQpHAnGRqds" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/sL8LKt6YHCE" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/AH6fyp_VROY" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/5fE7o1sJWVs" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,
  <iframe className="sliderelements" src="https://www.youtube.com/embed/gUQjIV2ESQk" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>,

];

const NewsData=[{
  id:3,
  flag:'National Policy',
  news:'Download National Innovation and Startup Policy',
    link:'NationalInnovationStartuppolicy.pdf',
  cName:'red'
},
{
  id:2,
  flag:'Institute Policy',
  news:'Institute Innovation and Startup Policy',
    link:'InnovationPolicy_StartupNITAgartala.pdf',
  cName:'green'
},
{
  id:1,
  flag:'Institute Policy',
  news:'lntellectual Property Right Policy (2020) of NITA',
    link:'IPRPolicy2020_NITA.pdf',
  cName:'yellow'
},


]

const EventData=[{
  id:7,
  date:'27',
  month:'August',
  duration:'1.5 hrs',
  topic:'Capacity Building',
  description:'In This workshop participants can learn how to setup their vision,execution,administration,connection, passion and adoption ! Finally they will be able to get answers for their long pending queries related to startup.',
  cName:'red'
},
{
  id:6,
  date:'23',
  month:'August',
  duration:'1.5 hrs',
  topic:'Idea Validation to Prototyping',
  description:'This workshop would broadly cover the area where participants can be aware about generation of new Ideas, how to build up those ideas, how to launch their ideas and finally they are able to gather knowledge about their idea from the market and prepare for startup.',
  cName:'green'
},
{
  id:5,
  date:'16',
  month:'August',
  duration:'1 hr',
  topic:'New Generation Innovation Network ( NGIN ).',
  description:'New Generation Innovation Network ( NGIN ).',
  cName:'yellow'
},
{
  id:4,
  date:'21',
  month:'July',
  duration:'',
  topic:'Innovation ecosystem and “Design Thinking”.',
  description:'A Free webinar organized by Innovation & Research Foundation for faculty members andstaff of NIT Agartala to contribute and formulate a plan in NIT Agartala with innovation ecosystem and “Design Thinking” driven programs/curriculum interventions',
  cName:'blue'
},
{
  id:3,
  date:'15',
  month:'July',
  duration:'1 hr',
  topic:'AMA (Ask Me Anything) Session by NASSCOM ',
  description:'A Free online questioning session with the NASSCOM 10,000 Startups teamto provide a platform where the student and staff who are want to be an entrepreneur are able to get answers to their long pending questions around starting up.',
  cName:'orange'
},
{
  id:2,
  date:'9-11',
  month:'July',
  duration:'3 days',
  topic:'A virtual social entrepreneurship boot camp',
  description:'A virtual mega entrepreneurship boot camp focused on ‘Social Entrepreneurship’ Ignite ‘21 started at NIT Agartala.',
  cName:'red'
},
{
  id:1,
  date:'4',
  month:'July',
  duration:'1 hr',
  topic:'The inspiring experience of a successful startup - IoTronix.',
  description:'A webinar and motivational speech organized by Innovation & startup cell , NIT Agartala to share the experience of a successful entrepreneur with the student, faculty and staff to create a environment for successfully setup and establish a startup company to support the socio economic development .',
  cName:'green'
},

]


export default GalleryData;
export {GalleryData,AudioVideoRefData,NewsData,EventData};