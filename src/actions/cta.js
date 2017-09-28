export function setUnHeart(payload){
    return {
        type: 'SET_UN_HEART',
        data: {
            hearted: payload
        }
    }
}

export function unHeart(data){
    return dispatch=>{
        return fetch('/api/un-heart',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let hearted=false;
            if(data.posts.length>0) hearted=true;
            dispatch(setUnHeart(hearted));
        })
    }
}

export function setUnShare(response){
    return {
        type:'SET_UN_SHARE',
        data: {
            shared: response
        }
    }
}

export function unShare(data){
    return dispatch=>{
        return fetch('/api/un-share',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let shared=false;
            if(data.posts.length>0) shared=true;
            dispatch(setUnShare(shared));
        })
    }
}


export function setHearted(response){
    return{
        type:'SET_HEARTED',
        data:{
            hearted:response
        }
    }
}

export function getHearted(data){
    return dispatch=>{
        return fetch('/api/get-hearted',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let hearted=false;
            if(data.posts.length>0) hearted=true;
            dispatch(setHearted(hearted));
        })
    }
}

export function setShared(response){
    return{
        type:'SET_SHARED',
        data:{
            shared:response
        }
    }
}

export function getShared(data){
    return dispatch=>{
        return fetch('/api/get-shared',{
            method:'post',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            let shared=false;
            if(data.posts.length>0) shared=true;
            dispatch(setShared(shared));
        })
    }
}
