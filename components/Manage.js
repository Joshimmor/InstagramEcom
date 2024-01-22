"use client"
import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import ChannelList from './ChannelList';
export default function Manage({userid}) {
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
    const deauthorize = async() =>{
      let response = await fetch("api/users/deauthorize")
      if(response.ok) window.location.reload()
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
                fetch("/api/subscriptions?userid="+userid)
                .then(n =>  n.json())
                .then(n => setTvChannels([...n]))
                .catch(err => console.error(err))
            }
  } 
  return (
    <div className="h-full min-h-screen bg-gradient-to-b from-neutral-100 to-slate-200 flex justify-center">
        <table className="mt-5 table w-3/4 mb-[20vh]">
            <thead>
                <tr className='flex w-full mb-4'>
                </tr>
            </thead>
            <tbody className="flex flex-col items-center  w-full mt-5" >
                {channels.length > 0 ? channels.map((n,i )=>{
                    return(
                        <tr  className= "flex w-full justify-between pt-5 py-10 pb-5 hover:bg-gray-100  border-b-2 border-solid border-slate-200" key={i} >
                            {window.innerWidth < 1200 ?null:<td>
                                <div className="relative w-12 h-12 rounded-full border border-gray-100 shadow-sm" style={{backgroundImage:`url(${n.artwork})`, backgroundSize:"contain"}}>
                                </div>
                            </td>}
                            <td className='flex justify-center items-center'>{n.channelName}</td>
                            <td className='flex flex-row w-1/6 justify-end'>
                                <button onClick={()=>unsubscribeToChannel(n)} className=" w-10 h-10 rounded-md bg-red-600  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">-</button>
                            </td>
                        </tr>
                    )
                }): null}
            </tbody>
        </table>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Channels</span>
        
                </Link>
                <Link href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                        <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Search</span>
                </Link>
                <Link href="/manage" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Manage</span>
                </Link>
                <button onClick={deauthorize} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Logout</span>
                </button>
            </div>
        </div>
    </div>
  )
}
