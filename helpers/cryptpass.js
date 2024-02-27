const CryptoJS = require("crypto-js");
require("dotenv").config()


let decryptpass=(pass)=>{
    const bytes  = CryptoJS.AES.decrypt(pass,process.env.SECRET_KEY)
        const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
}

let encrypt=(pass)=>{
    let encrypt=CryptoJS.AES.encrypt(pass,process.env.SECRET_KEY).toString()
    return encrypt
}


module.exports={decryptpass,encrypt}