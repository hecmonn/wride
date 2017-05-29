let posts = (state=[],action={})=>{
    switch(action.type){
        case "SET_HOME_POSTS":
            return action.posts

        case "SET_USER_POSTS":
            return action.posts
        default: return state;

    }
}

export default posts;
