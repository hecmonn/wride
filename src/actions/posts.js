//setting types
export function setUserPosts(posts){
    return {
        type: "SET_USER_POSTS",
        posts
    }
}

export function setHomePosts(posts){
    return {
        type: "SET_HOME_POSTS",
        posts
    }
}

//api calls
export function fetchUserPosts(uid){
    return dispatch=>{
        fetch(`/api/get-user-posts/${1}`)
        .then(res=>res.json())
        .then(data=>dispatch(setUserPosts(data.posts)))
    }
}

export function fetchHomePosts(auid){
    return dispatch=>{
        fetch(`/api/get-home-posts/${auid}`)
        .then(res=>res.json())
        .then(data=>dispatch(setHomePosts(data.posts)))
    }
}
