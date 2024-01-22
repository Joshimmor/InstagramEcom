
import React, {Fragment} from "react";
import { cookies } from 'next/headers'
import Login from "@/components/Login";
import Manage from "@/components/Manage";

export default  function App() {
  const cookieStore = cookies()
  const login = cookieStore.get('grandpatv')
  if(!login) return <Login/>
  return (
    <Fragment>
      <Manage userid={login.value}/>
    </Fragment>
  );
};

