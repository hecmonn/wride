export function setUserReg(data){
    return {
        type:'SET_USER_REG',
        data
    }
}

export function submitUser(data){
    return dispatch=>{
        fetch('/api/submit-user-reg',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>dispatch(setUserReg(data.response)))
    }
}
