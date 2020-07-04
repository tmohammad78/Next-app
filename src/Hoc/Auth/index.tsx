import React  , { useState, useEffect } from 'react';
import {useSelector  ,useDispatch } from 'react-redux';
import Router , { useRouter } from "next/router";
import { checkToken } from '../../../redux/Auth/action';
import { request } from 'http';
import {redirectToLogin} from './redirect';
import Cookies from 'js-cookie';


const PrivateRoute = ( ComposedComponent : any) => {

    const withComponent  =  (props: any) => {
        const router = useRouter();
        const [loading,setLoading] = useState(true);
        const auth = useSelector(state => state.auth);
        useEffect(()=>{
          async function checkToken (){
            const token  = Cookies.get('token');
            
          if(!token){
            setLoading(true)
            router.push('/auth')
          }else{
            setLoading(false)
          }
        }
        checkToken() 
      },[])
                return  loading  ? <div>...loadin</div> : <ComposedComponent {...props} /> 
    
        }

    return withComponent;
}

export default PrivateRoute;


