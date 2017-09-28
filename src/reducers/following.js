let following = (state=[],action={})=>{
    switch(action.type){
        case "SET_FOLLOWING_USER":
            return action.data
        case "SET_UN_FOLLOW":
            return action.data
        default: return state;
    }
}

export default following;
