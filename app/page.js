
import "./style.css";
import React, { Fragment} from "react";
import ProductPlacement from "@/components/ProductPlacement";
import { cookies } from 'next/headers'
import Login from "@/components/Login";

export default  function App() {
  const cookieStore = cookies()
  const login = cookieStore.get('login')
  if(!login) return <Login/>
  return (
    <Fragment>
      <ProductPlacement/>
    </Fragment>
  );
};

