"use client"

import React, { useState } from 'react'
import {create} from "../lib/setUser"
export default function Login() {
    let [username,setUserName] = useState("")
    let [password,setPassword] = useState("")
    let users = [
        {
            username: "vi",
            password: "vi"
        }
    ]
    function validateUser(){
        for(let i = 0; i < users.length;i++){
            if(users[i].username == username && users[i].password == password ){
            create("dfsadfasgaerhqhhwrh654gre64gweg84we6g1reg98w1gr6ew1ge8gr16erg1e8g6e1rge96g1e6g48e6gr1e86g1eg6eg8s6g46rse4gs6g41rs6g4s4g8461sg1s6g84s6g1s96g1sg1s6g4s8g61sg")
            }
        }
        return
    }
    
  return (
    <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
                <div>
                    <label  className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div className="mt-2">
                    <input id="email" 
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div className="mt-2">
                    <input id="password"
                     name="password" type="password"  required 
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <button type="button" onClick={validateUser} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>

        </div>
      </div>
  )
}
