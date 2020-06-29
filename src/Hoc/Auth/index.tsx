import React  , { useState, useEffect } from 'react';
import Router , { useRouter } from "next/router";

const AuthRequire = ({ ComposedComponent }: any) => {
    return (props: any) => {
        // const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
        const [logged, setLogged] = useState(false);
        const router = useRouter();
        useEffect(() => {
            if (logged) {
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