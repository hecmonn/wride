import jwtDecode from 'jwt-decode';

let initialState={}
if(localStorage.token){
    let decodedToken=jwtDecode(localStorage.token);
    initialState={
        ...decodedToken,
        access: true,
        token: localStorage.token
    }
} else {
    initialState={
        access: false,
    }
}

let auth=(state=[],action={})=>{
    switch(action.type){
        case "SET_LOGIN":
            return action.data
        case "SET_AUTH":
            return {
                access:true,
                ...state,
                ...action.data
            }
        default: return initialState;
    }
}

export default auth;
