import { NewsBar,EventBar } from "./newsbar"
import { NewsData ,EventData} from "./data"
import { RssFeed,SurroundSound } from "@material-ui/icons"
const NewsEvent=()=>{
    
    return(
        <div className="newsevent" id="newsevent">
            <div className="newscont">
            <h2><RssFeed/><span>News</span></h2>
            <div className="news">
           
           {NewsData.map((e)=>{
                   return( <NewsBar key={e.id} flag={e.flag} news={e.news} cName={e.cName}/>
                )})}
             
               
           
            </div>
            </div>
            <div className="eventcont">
            <h2><SurroundSound/><span>Event</span></h2>
            <div className="news">
            {EventData.map((e)=>{
                   return( <EventBar key={e.id} date={e.date} month={e.month} topic={e.topic} description={e.description} cName={e.cName}/>
                )})}
           
               
             
            </div>
            </div>
        </div>
    )
}

export default NewsEvent