export function setFollowingUser(data){
    return {
        type:'SET_FOLLOWING_USER',
        data
    }
}

export function followingUser(data){
    return dispatch=>{
        return fetch('/api/following',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let following=false;
            if (data.posts.length>0) following=true;
            dispatch(setFollowingUser(following))
        })
    }
}

export function setUnFollow(data){
    return{
        type:'SET_UN_FOLLOW',
        data
    }
}

export function unFollow(data){
    return dispatch=>{
        return fetch('/api/un-follow',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let followed=false;
            if (data.posts.length>0) followed=true;
            dispatch(setUnFollow(followed));
        })
    }
}
