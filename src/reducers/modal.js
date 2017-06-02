let modal=(state=[],action={}=>{
    switch(action.type){
        case "SHOW_MODAL":
            return action.payload;
        default return state;
    }
});
