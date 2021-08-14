const Footer=()=>{
    return(
        <div className='footer'>
             <div className='links'>
                   <div className="linkcont"><img src="./assets/asset1.png" /> <h1>SCID</h1></div>
                   <div className='linksinside linkcont'> 
                       <div><h3>Site Links</h3> <ul><li>About Us</li><li>Contact Us</li><li>Start Ups</li><li>Initiatives</li><li>Team</li></ul></div>
                       <div><h3>Reference Links</h3> <ul><li>Start-Up India</li><li>IIC Website</li><li>NIT Agartala</li><li>IIIT Agartala</li><li>MHRD</li></ul></div>
                   </div>
                   <div className="linkcont"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3732378630234!2d91.41923091493484!3d23.840876684544867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec19aaa69b0d%3A0xf1c683a298e69e7b!2sNational%20Institute%20of%20Technology%20Agartala!5e0!3m2!1sen!2sin!4v1627468726020!5m2!1sen!2sin"  style={{border:0,borderRadius:30,filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}} allowfullscreen="" loading="lazy"></iframe></div>
             </div>

              <div className='copyright'>
                  <p>© 2019-20 All Rights Reserved. Designed by IIC & E-Cell , NIT Agartala</p>
              </div>
    </div>
    )
      
}

export default Footer;