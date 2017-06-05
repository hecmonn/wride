export function authLogin(cred){
    return {
        type: "AUTH",
        cred
    }
}

export function login(cred){
    const {identifier,password}=cred;
    return dispatch=>{
        fetch('/api/auth', {
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
        .catch(err=>{err})
    }
}
