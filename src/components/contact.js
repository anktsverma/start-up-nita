import {Telegram} from '@material-ui/icons'
import { Facebook,Instagram,Twitter,LinkedIn ,AirplanemodeActive} from '@material-ui/icons';
import { shadows } from '@material-ui/system';
const Contact=()=>{
    return(
        <div class='contact' id="contact">
          <h2><span>Contact Us</span></h2>
        <form>
            <div className="formcontainer">
                  <div className="formfield">
                      <div className="formfield1">
                      <input type="text" placeholder="Name" name="name"/>
                      <input type="email" placeholder="Email" name="email"/>
                      <input type="text" placeholder="Subject" name="subject" />
                      </div>
                      <div className="formfield2"><textarea placeholder="Type your message" name="message" /></div>
                  </div>
                  <div><button><Telegram/> <div>Send</div></button></div>
            </div>
            <div className="fua">
                <h3>Find Us At</h3>
                <div className="fuafield">
                    <div className="fuafield1"><AirplanemodeActive style={{color:'#00EAA1'}}/><h4><span>Address </span>-Computer Science Building,NIT Agartala,Barjala,Jirania</h4></div>
                    <div><Facebook style={{fontSize: '50px',color:'#4867AA'}} /><Instagram style={{fontSize: '50px',color:'#F55041'}}/><Twitter style={{fontSize: '50px',color:'#1C9CEA'}}/><LinkedIn style={{fontSize: '50px',color:'#0077B5'}}/></div>
                </div>
            </div>
        </form>
        </div>
    )
}

export default Contact;