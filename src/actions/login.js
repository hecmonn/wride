export function authLogin(cred){
    return {
        type: "AUTH",
        cred
    }
}

export function login(cred){
    return dispatch=>{
        fetch('/api/auth')
        .then(res=>res.json())
        .then(data=>dispatch(authLogin(data)))
        .catch(err=>{err})
    }
}
