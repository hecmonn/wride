let posts = (state=[],action={})=>{
    switch(action.type){
        case "SET_USER_POSTS":
            return action.posts
            
        case "SET_HOME_POSTS":
            return action.posts

        case "SET_SUBMIT":
            return action.data
        default: return state;

    }
}

export default posts;
