"use client"
import { useEffect,useState } from "react"
import Products from "./Products"


export default  function ProductPlacement() {
  let channels = [
    {
        channelName:"Fox",
        logoPath:"/Fox.jpg",
        id:347
    },
    {
        channelName:"SNY",
        logoPath:"/SNY.jpg",
        id:759
    },
    {
        channelName:"ESPN",
        logoPath:"/ESPN.webp",
        id:44
    },
    {
        channelName:"TruTv",
        logoPath:"/TruTv.webp",
        id:341
    }
  ]

  return (
    <div className="grid grid-cols-4 gap-2 p-2 justify justify-items-center  items-center h-screen">
      {channels.map((n,i)=>{
          return <Products key={i} id={n.id} logo={n.logoPath} name={n.channelName}/>
        })}
    </div>
  )

}
