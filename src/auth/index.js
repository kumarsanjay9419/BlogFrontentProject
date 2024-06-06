//isLoggedIn => data=>set to localstorage

export const isLoggedIn=()=>{
    let data=localStorage.setItem("data")
    if(data !=null)
        return true
    else
    return false
}

//doLogin => data=>set to localstorage
export const doLogin=(data,next)=>{
         localStorage.setItem("data",JSON.stringify(data))
         next()
}

//doLogout

export const doLogout=(next)=>{
 
    localStorage.removeItem("data")
        next()
}

//get currentUser
export const getCurrentUserDetails=()=>{
    if(isLoggedIn){
       return JSON.parse(localStorage.getItem("data"));
    }else{
        return false;
    }
}