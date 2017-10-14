let initialState={
    open: false,
    data: {
        title:'',
        text:'',
        first_name:'',
        last_name:''
    }
}
let modal=(state=[],action={})=>{
    switch(action.type){
        case "OPEN_MODAL":
            return {
                open:true,
                data: action.data
            }
        case "CLOSE_MODAL":
            return initialState;
        default: return initialState;
    }
}

export default modal;
