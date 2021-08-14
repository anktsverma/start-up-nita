import React from 'react'
import {EmojiObjectsOutlined,} from '@material-ui/icons'
const Banner=()=>{
    return(
        <div className="bannercon" id="banner">
            <div className="banner">
                <div className="banner-title"><h1>SCID-NIT AGARTALA</h1><h3>Start up and Centre for Innovation & Design(SCID)</h3></div>
                <div className="banner-img-con"><img class="bannerimg" src="assets/asset2.jpg" /></div>
            </div>
            <div className="bannercontxt"><EmojiObjectsOutlined /><h3>  IT’S NOT ABOUT IDEAS. IT’S ABOUT MAKING IDEAS HAPPEN INTO REALITY</h3></div>
        </div>
    )
}
export default Banner