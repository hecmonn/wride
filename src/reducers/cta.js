let cta = (state=[],action={})=>{
    switch(action.type){
        case "SET_UN_HEART":
            return action.data;
        case "SET_UN_SHARE":
            return action.data;
        case "SET_HEARTED":
            return action.data;
        case "SET_SHARED":
            return action.data;
        default: return state;
    }
}

export default cta;
