import {PictureAsPdf} from '@material-ui/icons'
import { CloudDownload } from '@material-ui/icons';
const Activities=()=>{
    return(
        <div className='activities' id="activities">
             <h2><span>Activities</span></h2>
         <div className="activitiescont">
         <div className='img'>
              <img src="assets/assetactivities.svg"/>
            </div>

            <div className='downloads'>
             <div className="downloadsin1">
               <PictureAsPdf style={{fontSize: '60px',color:'#00EAA1'}} />
               <h2>Detailed Annual Report of Activities</h2>
             </div>
             <div className="downloadsin2">
                <h3>Download Report</h3>
                <button><CloudDownload/>Download </button>
             </div>

             </div>
         </div>
        </div>
    )
}

export default Activities;