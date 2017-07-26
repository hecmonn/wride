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
        isAuthenticated: false,
        user: {}
    }
}

let auth=(state=[],action={})=>{
    switch(action.type){
        case "SET_LOGIN":
            return action.data
        case "SET_AUTH":
            return {
                ...state,
                ...action.data
            }
        default: return initialState;
    }
}

export default auth;
