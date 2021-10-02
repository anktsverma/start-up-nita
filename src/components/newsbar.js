const NewsBar=({flag,news,link,cName})=>{
      return(
        <div className="newsbar">
        <div className={cName+' newsflag'}>{flag}</div>
        <div className='newsnews'><a href={link}>{news}</a></div>
    </div>
      )
}
const EventBar=({date,month,duration,topic,description,cName})=>{
  return(
    <div className="eventbar">
    <div className={cName+" eventflag"}><span>{date}</span><br/>{month}<br/>{duration}</div>
    <div className='eventnews'><span>{topic}</span><br/> <p className='para'>{description}</p></div>
</div>
  )
}


export {NewsBar,EventBar}