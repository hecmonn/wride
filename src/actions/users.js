
export function setUser(user){
    return {
        type:"SET_USER",
        user
    }
}

export function getUser(username){
    let us="radiohead";
    return dispatch=>{
        fetch(`/api/get-user/${us}`)
        .then(res=>res.json())
        .then(data=>dispatch(setUser(data.posts)))
    }
}
