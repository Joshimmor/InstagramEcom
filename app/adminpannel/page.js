"use client"
import React,{useEffect,useState} from 'react'


export default function Page() {
    let [admin,setAdmin] = useState()
    let [users,setUsers] = useState([])
    let [isOpen,setModal] = useState(false)
    useEffect(()=>{
      fetch("api/users/adminpannel")
      .then(n => n.json())
      .then(n => setUsers(n))
    },[])
  const getUsers = async () =>{
    fetch("api/users/adminpannel")
    .then(n => n.json())
    .then(n => setUsers(n))
  }  
  const deleteUser = async (user) =>{
    fetch("api/users/adminpannel?id="+admin.id,{
      method:"PUT",
      body:JSON.stringify(user)
    })
    .then( n => n.json())
    .then(n => getUsers())
  }

  const onOpen = async () =>{
    setModal(true)
  }
  const onClose = async () =>{
    setModal(false)
    fetch("api/users/adminpannel")
    .then(n => n.json())
    .then(n => setUsers(n))
  }
  if(!admin) return <AdminModal setAdmin={setAdmin}/>
  return (
    <div className='min-h-screen w-screen h-full flex flex-col justify-center items-center'>
      <UserModal isOpen={isOpen} onClose={onClose} admin={admin} getUsers={getUsers}/>
      <button onClick={onOpen} className="fixed top-2 left-2 w-10  h-10 rounded-md bg-gray-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Add</button>
      {users.length < 0  ? null :users.map((n,i) => {
        return (
          <div key={i} className='mb-5 w-3/4 h-10 flex flex-row justify-between'>
              <p>{n. id}</p>
              <p>{n.username}</p>
              <button onClick={()=>deleteUser(n)} className=" w-50 h-10 p-2 rounded-md bg-red-600  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
          </div>
        )
      })}

    </div>
  )
}

const UserModal = ({ isOpen, onClose,admin,getUsers}) => {
  let [username,setNewUserName] = useState()
  let [password,setNewPassowrd] = useState()
  const submitNewUser = async ()=>{
    if(!username || !password) return
    let user = {
      username:username,
      password:password
    }
    fetch("api/users/adminpannel?id="+admin.id,
    {
      method:"POST",
      body: JSON.stringify(user)
    })
    .then(n=> n.json())
    .then(n => getUsers())
    .then(n => onClose())

  }
  const handleUser = (event) => {
    setNewUserName(event.target.value);
  }
  const handlePassword = (event) => {
    setNewPassowrd(event.target.value);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white p-6 rounded-lg z-10 w-3/4 flex flex-col items-center ">
          <div className="relative w-full mb-5">
                    <input onChange={handleUser} type="text"   className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 " placeholder="Username" />
            </div>
            <div className="relative w-full mb-5">
                    <input onChange={handlePassword} type="text"  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 " placeholder="Password" />
          </div>
          <div className="relative w-full mb-5 flex flex-row justify-end">
            <button onClick={submitNewUser} className="w-50 h-10 p-2 rounded-md bg-gray-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Add User</button>
          </div>
      </div>
    </div>
  );
};

const AdminModal = ({ setAdmin}) => {
  let [username,setNewUserName] = useState()
  let [password,setNewPassowrd] = useState()
  const submitAuth = async ()=>{
    if(!username || !password) return
    let user = {
      username:username,
      password:password
    }
    fetch("api/users",
    {
      method:"POST",
      body: JSON.stringify(user)
    })
    .then(n => n.json())
    .then(n => {
      if(n.username == "admin"){
        setAdmin(n)
      }
    })
    .catch(err => window.location("/"))
  }
  const handleUser = (event) => {
    setNewUserName(event.target.value);
  }
  const handlePassword = (event) => {
    setNewPassowrd(event.target.value);
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" ></div>
        <div className="bg-white p-6 rounded-lg z-10 w-3/4 flex flex-col items-center ">
          <div className="relative w-full mb-5">
                    <input onChange={handleUser} type="text"   className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 " placeholder="Username" />
            </div>
            <div className="relative w-full mb-5">
                    <input onChange={handlePassword} type="text"  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 " placeholder="Password" />
          </div>
          <div className="relative w-full mb-5 flex flex-row justify-end">
            <button onClick={submitAuth} className="w-50 h-10 p-2 rounded-md bg-gray-700  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Sign In</button>
          </div>
      </div>
    </div>
  );
};