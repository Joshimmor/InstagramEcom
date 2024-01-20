"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Link from "next/link"


export default function Page({params}) {
  let [tvLink,setLink] = useState("")
  let [mutedoption,setmuted] = useState(true)
  let [playingoption,setplaying] = useState(false)
  useEffect(()=>{
    fetch("/api/streams?channelid="+params.id)
    .then(n =>  n.json())
    .then(n => setLink(n.link))
    .catch(err => console.error(err))
  },[params.id])
  function ready(){
    setmuted(false); 
    setplaying(true)
  }

  return (
  <div className='w-screen h-screen bg-gradient-to-b from-neutral-900 to-slate-800'>
    <Link href="/" className="z-10 absolute m-4 flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </Link>
    <ReactPlayer 
    className="" 
    url={tvLink} 
    controls
    playing={playingoption}
    onReady={ready}
    muted={mutedoption}
    height="100%"
    width="100vw"/>
  </div>

  )
}
