export function(modalProps){
    return{
        type:"SHOW_MODAL",
        data :{
            modalProps
        }
    }
}

export function(toSearch){
    return dispatch=>{
        fetch('/post',{
            type:'post',
            body:{
                id: toSearch.id
            }
        })
        .then(res.json())
        .then(data=>dispatch(showModal(data)))
        .catch(err=>{err})
    }
}
