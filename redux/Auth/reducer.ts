import { REGISTERUSER , SUCCESSREGISTER ,LOGINUSER, GETTOKENSTORAGE} from './actionTypes';

interface IAuthState {
    message?:string,
    name:string,
    email:string,
    phone:string,
    token:string,
    authenticated:boolean
}

const initialState : IAuthState = {
    message : '',
    name:'',
    email:'',
    phone:'',
    token:'',
    authenticated:false
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
            authenticated:true
        }
        case GETTOKENSTORAGE:
            const { name,email,authenticated } = action.user
            return {
                ...state,
                token:action.user.token,
                name,
                email,
                authenticated
            }
        default :
            return state ;
    }
}

export default AuthReducer;