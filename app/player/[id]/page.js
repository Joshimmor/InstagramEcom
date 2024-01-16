"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import TvConfig from "../../tv.json"
export default function Page({params}) {
  let tvChannelID = params.id;
  let tvChannel = TvConfig['channels'].filter(n => n.id == tvChannelID)[0]
  let [mutedoption,setmuted] = useState(true)
  let [playingoption,setplaying] = useState(false)
  // useEffect(()=>{
  //   if(ReactPlayer.canPlay(tvChannel.stream)){
  //     setTimeout(() => {
  //       setmuted(false)
  //     }, 3500)
  //   }else{
  //     window.location.reload()
  //   }

  // },[tvChannel])
  function refresh(){
    window.location.reload()
  }
  return (
  <div className='w-screen h-screen'>
    <button onClick={refresh} className="z-10 absolute rounded-md bg-indigo-600 m-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Refresh</button>
    <ReactPlayer 

    className="" 
    url={tvChannel.stream} 
    controls

    playing={playingoption}
    onReady={()=>{setmuted(false); setplaying(true)}}
    muted={mutedoption}
    width='100vw'
    height='100%'/>
  </div>

  )
}
