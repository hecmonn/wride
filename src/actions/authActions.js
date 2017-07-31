export function authLogin(data){
    return {
        type: "SET_LOGIN",
        data
    }
}

export function login(cred){
    const {identifier,password}=cred;
    return dispatch=>{
        return fetch('/api/auth', {
            method:'post',
            body:JSON.stringify({
                identifier,
                password
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>dispatch(authLogin(data)))
    }
}

export function validateAuth(data){
    return dispatch=>{
        dispatch(setAuth(data));
    }
}

export function setAuth(data){
    return {
        type:'SET_AUTH',
        data
    }
}
