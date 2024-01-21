"use client"
import React, {useState} from 'react'

export default function ChannelList({Channels,userid,subbedChannels}) {
   let [subbedChannelsID,setSubbedChannelList] = useState(subbedChannels.map(n => n.id))
  const subscribeToChannel = async (channel) =>{
    if(subbedChannelsID.includes(channel.id)) return
    let payload = {
        user: userid,
        subChannel: channel
    }
    let response = await fetch("api/subscriptions",
        {
            method: "POST", 
            body: JSON.stringify(payload), 
        }
    )
    if(response.ok) setSubbedChannelList([...subbedChannelsID,channel.id])
  } 
  const unsubscribeToChannel = async (channel) =>{
    let payload = {
        user: userid,
        subChannel: channel
    }
    let response = await fetch("api/subscriptions",
        {
            method: "PUT", 
            body: JSON.stringify(payload), 
          }
        )
        if(response.ok){
            let newSubbedList = []
            for(let i = 0; i < subbedChannelsID.length; i++){
                if(subbedChannelsID[i] != channel.id){
                    newSubbedList.push(subbedChannelsID[i])
                }
            }
            setSubbedChannelList(newSubbedList)
        }
  } 
  function mobileSubscribe(channel,event) {
    event.target.ChannelList.add("bg-indigo-200")
  }
  return (
    <table className="mt-5 table w-full">
        <thead>
            <tr className='flex w-full mb-4'>
            </tr>
        </thead>
        <tbody className="flex flex-col items-center  overflow-y-scroll w-full mt-5" style={{maxHeight: "50vh"}}>
            {Channels.length > 0 ? Channels.map((n,i )=>{
                return(
                    <tr  className= "flex w-full justify-between pt-5 py-10 pb-5 hover:bg-gray-100  border-b-2 border-solid border-slate-200" key={i} >
                        {window.innerWidth < 1200 ?null:<td>
                            <div className="relative w-12 h-12 rounded-full border border-gray-100 shadow-sm" style={{backgroundImage:`url(${n.artwork})`, backgroundSize:"contain"}}>
                            </div>
                        </td>}
                        <td className='flex justify-center items-center'>{n.channelName}</td>
                        <td className='flex flex-row w-1/6 justify-end'>
                           {subbedChannelsID.includes(n.id)?
                            <button onClick={()=>unsubscribeToChannel(n)} className=" w-10 h-10 rounded-md bg-red-600  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">-</button>
                            :<button onClick={()=>subscribeToChannel(n)} className=" w-10  h-10 rounded-md bg-gray-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">+</button>}
                            <br></br>   
                        </td>
                    </tr>
                )
            }): null}
        </tbody>
    </table>
  )
}
