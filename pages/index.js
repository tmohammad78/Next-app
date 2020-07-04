import { useEffect, useState } from "react";
import { wrapper } from "../store";
import {useSelector  ,useDispatch } from 'react-redux';
// import Page from "../components/page";
import Router from 'next/router'
import Order from "../src/Container/Order";
import { checkToken } from '../redux/Auth/action';
import PrivateRoute from "../src/Hoc/Auth/index";
import "../src/Styles/main.scss";

const Index = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  // const router  = useRouter;
  useEffect(()=>{
   dispatch(checkToken()) 
  },[])
  useEffect(()=>{
    // const auth = JSON.parse(window.localStorage.getItem('user'))
    console.log(auth)
    debugger
    if(!auth.token)
     Router.push('/auth')
  })
  return (
      <div>
        {
            auth.token ? <div> HI {auth.name} </div> : null
        }
      </div>

  );
};



export default Index;
