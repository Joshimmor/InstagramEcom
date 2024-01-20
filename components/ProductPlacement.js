"use client"
import { useEffect,useState } from "react"
import Products from "./Products"
import ChannelModel from "@/components/ChannelModal"

export default  function ProductPlacement({userid}) {
  let [channels,setTvChannels] = useState([])
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(()=>{
    fetch("/api/subscriptions?userid="+userid)
    .then(n =>  n.json())
    .then(n => setTvChannels([...n]))
    .catch(err => console.error(err))
  },[userid, isModalOpen])

  return (
    <div className="h-screen bg-gradient-to-b from-neutral-100 to-slate-200">
      <div className="p-10 grid grid-cols-4 gap-2 p-2 justify justify-items-center  items-center">
          {channels.map((n,i)=>{
              return <Products key={i} id={n.id} logo={n.artwork} name={n.channelName} stream={n.link}/>
          })}
      </div>
      <button  onClick={openModal} className="z-10 fixed bottom-0 m-4 flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Channels</button>
      <ChannelModel isOpen={isModalOpen} onClose={closeModal} userid={userid} subbedChannels={channels}></ChannelModel>
    </div>
  )

}
