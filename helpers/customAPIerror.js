let customApiError=(message,statuscode)=>{

let customError= new Error(message)
    customError.statuscode=statuscode 
    return customError
}
module.exports=customApiError