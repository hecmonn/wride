export function closeModal(){
    return{
        type:'CLOSE_MODAL'
    }
}
export function openModal(postData){
    return {
        type:'OPEN_MODAL',
        data: postData
    }
}

export function onClose(){
    return dispatch=>{
        dispatch(closeModal());
    }
}
export function onOpen(postData){
    return dispatch=>{
        dispatch(openModal(postData));
    }
}
