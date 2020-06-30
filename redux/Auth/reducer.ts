import { REGISTERUSER , SUCCESSREGISTER ,LOGINUSER, GETTOKENSTORAGE} from './actionTypes';

interface IAuthState {
    message?:string,
    name:string,
    email:string,
    phone:string,
    token:string
}

const initialState : IAuthState = {
    message : '',
    name:'',
    email:'',
    phone:'',
    token:''
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
            token : token
        }
        case GETTOKENSTORAGE:
            return {
                ...state,
                token:action.tokenStorage
            }
        default :
            return state ;
    }
}

export default AuthReducer;