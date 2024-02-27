import React from 'react'
import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'

function Watch() {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoPlay progress controls src='https://player.vimeo.com/external/458873946.sd.mp4?s=ad7da4b60c0b4ed1f188073ad2027687eb3f0e86&profile_id=164&oauth2_token_id=57447761'  />

    </div>
  )
}

export default Watch