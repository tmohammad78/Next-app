import React  , { useState, useEffect } from 'react';
import {useSelector  ,useDispatch } from 'react-redux';
import Router , { useRouter } from "next/router";
import { checkToken } from '../../../redux/Auth/action';
import { request } from 'http';
import {redirectToLogin} from './redirect';



const PrivateRoute = ( ComposedComponent : any) => {

    const withComponent  =  (props: any) => {
        const dispatch = useDispatch()
        console.log(props)
      //   const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
        const auth = useSelector(state => state.auth);
        // React.useEffect(()=> {
        //     dispatch(checkToken())
        // },[])

        const [logged, setLogged] = useState(false);
        const router = useRouter();
        
        // useEffect(() => {
        //     console.log('auth',auth) 
        //     if (auth.length > 3){
        //         <ComposedComponent {...props} />
        //     } else {
        //         console.log(auth.length)
        //         router.push("/auth");
        //     }
        // },[])
        // if (auth.logged) {
        //     return <ComposedComponent {...props} />
        // }

        // const handle = () =>{
        //     debugger

        //     }
                return auth.authenticated ?  <ComposedComponent {...props} /> : null
    
        }

    // withComponent.getInitialProps  = async (ctx:any) =>{
    //     console.log('dd',ctx.req)
    //     const token = false;
    //     // token ? null :  redirectToLogin(ctx.res);
    //     const initialProps = 'e'
     
    //     return initialProps;
    // }
    return withComponent;
}

export default PrivateRoute;





// const AuthRequire = ( ComposedComponent : any) => {
//     return (props: any) => {
//         const dispatch = useDispatch()
//         // const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
//         const auth = useSelector(state => state.auth.token);
//         React.useEffect(()=> {
//             dispatch(checkToken())
//         },[])

//         const [logged, setLogged] = useState(false);
//         const router = useRouter();
        
//         // useEffect(() => {
//         //     console.log('auth',auth) 
//         //     if (auth.length > 3){
//         //         <ComposedComponent {...props} />
//         //     } else {
//         //         console.log(auth.length)
//         //         router.push("/auth");
//         //     }
//         // },[])
//         // if (auth.logged) {
//         //     return <ComposedComponent {...props} />
//         // }

//         // const handle = () =>{
//         //     debugger

//         //     }
//         useEffect(()=>{
//             debugger
//             if (auth.length > 3){
//                 <ComposedComponent {...props} />
//             } else {
//                 console.log(auth.length)
//                 router.push("/auth");
//             }
//         },[])
    
//             return   null;
//     }
// }

// export default AuthRequire;