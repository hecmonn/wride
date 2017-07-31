export function setUser(user){
    return {
        type:"SET_USER",
        user
    }
}

export function getUser(username){
    return dispatch=>{
        return fetch(`/api/get-user/${username}`)
        .then(res=>res.json())
        .then(data=>dispatch(setUser(data.posts)))
    }
}
