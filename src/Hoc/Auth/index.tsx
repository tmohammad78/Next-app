import React  , { useState, useEffect } from 'react';
import {useSelector  ,useDispatch } from 'react-redux';
import Router , { useRouter } from "next/router";
import { checkToken } from '../../../redux/Auth/action';


const AuthRequire = ({ ComposedComponent }: any) => {
    return (props: any) => {
    
        const dispatch = useDispatch()
        // const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
        const auth = useSelector(state => state.auth.token);
        React.useEffect(()=> {

            dispatch(checkToken())
        },[])

        const [logged, setLogged] = useState(false);
        const router = useRouter();
        
        useEffect(() => {
            debugger
            console.log('auth',auth)
            if (auth)  {
                <ComposedComponent {...props} />
            } else {
                router.push("/auth");
            }
        })
        // if (auth.logged) {
        //     return <ComposedComponent {...props} />
        // }
        return null
    }
}

export default AuthRequire;