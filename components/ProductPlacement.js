"use client"
import { useEffect,useState } from "react"
import Products from "./Products"
import TvConfig from "../app/tv.json"

export default  function ProductPlacement({userid}) {
  let [channels,setTvChannels] = useState([])

  useEffect(()=>{
    fetch("/api/subscriptions?userid="+userid)
    .then(n =>  n.json())
    .then(n => setTvChannels([...n]))
    .catch(err => console.error(err))
  },[userid])

  return (
    <div className="grid grid-cols-4 gap-2 p-2 justify justify-items-center  items-center h-screen bg-gradient-to-b from-neutral-100 to-slate-200">
      {channels.map((n,i)=>{
          return <Products key={i} id={n.id} logo={n.artwork} name={n.channelName} stream={n.link}/>
        })}
    </div>
  )

}
