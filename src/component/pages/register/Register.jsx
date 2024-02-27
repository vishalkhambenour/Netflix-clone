import React, { useRef, useState } from 'react'
import "./Register.scss"

export default function Register() {

    const [isemail,setisemail]=useState("")
    const [ispass,setispass]=useState("")

    const emailref=useRef()
    const passref=useRef()

    const handleemail=()=>{
        setisemail(emailref.current.value)
    }
    const handlepass=()=>{
        setispass(passref.current.value)
    }

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">

            <img className="logo"  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited Movies, Tv shows, more</h1>
            <h2>Watch anywhere ,Cancel anytime</h2>
            <p>Ready to watch ,Enter your Email to create or restaer your membership</p>
        {!isemail ?(<div className="input">
            <input type="email" placeholder='email address' ref={emailref}  />
            <button className="refisterButton" onClick={handleemail}>Get Started</button>
        </div>):(<form className="input">
            <input type="password" placeholder='Password' ref={passref} />
            <button className="refisterButton" onClick={handlepass}>start</button>
        </form>)}
        </div>
    </div>
  )
}
