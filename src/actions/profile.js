export function setUserPosts(posts){
    return {
        type: "SET_USER_POSTS",
        posts
    }
}

export function fetchUserPosts(uid){
    return dispatch=>{
        return fetch(`/api/get-user-posts/${uid}`)
        .then(res=>res.json())
        .then(data=>dispatch(setUserPosts(data.posts)))
    }
}
