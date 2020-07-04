import { REGISTERUSER , SUCCESSREGISTER ,LOGINUSER, GETTOKENSTORAGE} from './actionTypes';

interface IAuthState {
    message?:string,
    name:string,
    email:string,
    phone:string,
    token:string,
    isAuthenticated:boolean,
    loading:boolean
}

const initialState : IAuthState = {
    message : '',
    name:'',
    email:'',
    phone:'',
    token:'',
    isAuthenticated:false,
    loading:false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type){
        case SUCCESSREGISTER:
            return {
                ...state,
                message:'successfull'
            }
        case LOGINUSER : 
        const { user , token} = action.data;
        return {
            ...state,
            name:user.name,
            email:user.email,
            phone:user.phone,
            token : token,
            isAuthenticated:true,
            loading:false
        }
        case GETTOKENSTORAGE:
            const { name,email,isAuthenticated } = action.user
            return {
                ...state,
                token:action.user.token,
                name,
                email,
                isAuthenticated
            }
        default :
            return state ;
    }
}

export default AuthReducer;