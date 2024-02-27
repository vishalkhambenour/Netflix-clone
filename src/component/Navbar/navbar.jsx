import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, NotificationImportant, Notifications, Search, WbIncandescentTwoTone } from '@material-ui/icons'

function Navbar() {
    const[isscrolled,setisscrollesd]=useState(false)

    window.onscroll=()=>{
        setisscrollesd(window.pageYOffset  ===0 ? false:true)
        return ()=> (window.onscroll = null)
    }

    console.log(isscrolled)

  return (
    <div className={isscrolled ? "navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <span>HomePage</span>
                <span>Movies</span>
                <span>Series</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icons'/>
                <span>KIDS</span>
                <Notifications className='icons'/>
                <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg" alt="" />
               <div className="profile">
               <ArrowDropDown className='icons'/>
               <div className="options">
                <span>Settings</span>
                <span>Logout</span>
               </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar