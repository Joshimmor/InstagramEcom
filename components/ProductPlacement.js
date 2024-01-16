"use client"
import { useEffect,useState } from "react"
import Products from "./Products"
import TvConfig from "../app/tv.json"

export default  function ProductPlacement() {
  let channels = TvConfig['channels']
  // let channels = [
  //   {
  //       channelName:"Fox",
  //       logoPath:"/Fox.jpg",
  //       id:347,
  //       stream:"http://247preview.foxnews.com/hls/live/2020027/fncv3preview/primary.m3u8"
  //   },
  //   {
  //       channelName:"SNY",
  //       logoPath:"/SNY.jpg",
  //       id:759,
  //       stream:""
  //   },
  //   {
  //       channelName:"ESPN",
  //       logoPath:"/ESPN.webp",
  //       id:44,
  //       stream:""
  //   },
  //   {
  //       channelName:"TruTv",
  //       logoPath:"/TruTv.webp",
  //       id:341,
  //       stream:""
  //   }
  // ]

  return (
    <div className="grid grid-cols-4 gap-2 p-2 justify justify-items-center  items-center h-screen">
      {channels.map((n,i)=>{
          return <Products key={i} id={n.id} logo={n.logoPath} name={n.channelName} stream={n.stream}/>
        })}
    </div>
  )

}
