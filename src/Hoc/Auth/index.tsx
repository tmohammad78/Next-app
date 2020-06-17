import React, { useState } from 'react';
import Router from "next/router";

const AuthRequire = ({ ComposedComponent }: any) => {
    return (props: any) => {
        // const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
        const [logged, setLogged] = useState(false);
        if (logged) {
            <ComposedComponent {...props} />
        }
        // if (auth.logged) {
        //     return <ComposedComponent {...props} />
        // }
        return Router.push("/auth");
    }
}

export default AuthRequire;