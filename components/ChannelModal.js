"use client"
import React  ,{useEffect, useState} from 'react';
import ChannelList from './ChannelList';

const ChannelModal = ({ isOpen, onClose,userid,subbedChannels}) => {

  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [channelList, setChannelList] = useState([]);
  useEffect(()=>{
    setChannelList([])
  },[isOpen])
  const handleChange = (event) => {
    setTextInput(event.target.value);
  }
  const handlePress = (event) => {
    if(event.key === 'Enter'){
      console.log(textInput)
      searchForChannel(textInput)
    }
  }

  const searchForChannel = async (channelName) => {
    setLoading(true)
    let channelSearch = await fetch("api/channels?channel="+channelName)
    let channels = await channelSearch.json()
    setLoading(false)
    setChannelList(channels)
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-10 w-3/4 flex flex-col items-center ">
            <div className="flex items-center w-full ">   
                <div className="relative w-full">
                    <input type="text" onChange={handleChange} onKeyDown={handlePress}  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 " placeholder="Search Channel name" />
                </div>
                <button  onClick={()=>searchForChannel(textInput)}className="p-3 ms-2 text-sm font-medium rounded text-white bg-gray-700 font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
            {loading ? (
                <div role="status">
                    <svg aria-hidden="true" className="m-5 inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : null}
            {channelList.length > 0 ? <ChannelList Channels={channelList} userid={userid} subbedChannels={subbedChannels}/>: null }
      </div>
    </div>
  );
};

export default ChannelModal;