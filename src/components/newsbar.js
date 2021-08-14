const NewsBar=({flag,news,cName})=>{
      return(
        <div className="newsbar">
        <div className={cName+' newsflag'}>{flag}</div>
        <div className='newsnews'>{news}</div>
    </div>
      )
}
const EventBar=({date,month,topic,description,cName})=>{
  return(
    <div className="eventbar">
    <div className={cName+" eventflag"}><span>{date}</span><br/>{month}</div>
    <div className='eventnews'><span>{topic}</span><br/> {description}</div>
</div>
  )
}


export {NewsBar,EventBar}