"use client"
import React, {useState} from 'react'

export default function ChannelList({Channels,userid,subbedChannels}) {
   let [subbedChannelsID,setSubbedChannelList] = useState(subbedChannels.map(n => n.id))
  const subscribeToChannel = async (channel) =>{
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
  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
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
                    <tr key={i} className='flex w-full justify-between p-0 m-0 hover:bg-gray-200'>
                        <td>
                        <div className="relative w-12 h-12 rounded-full border border-gray-100 shadow-sm" style={{backgroundImage:`url(${n.artwork})`, backgroundSize:"contain"}}>

                        </div>
                        </td>
                        <td className='flex justify-center items-center'>{n.channelName}</td>
                        <td className='flex flex-row w-1/6 justify-end'>
                           {subbedChannelsID.includes(n.id)?
                            <button onClick={()=>unsubscribeToChannel(n)} className="w-full m-2 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
                            :<button onClick={()=>subscribeToChannel(n)} className="w-full m-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</button>}
                            <br></br>
                            
                        </td>
                    </tr>
                )
            }): null}
        </tbody>
    </table>
  )
}
