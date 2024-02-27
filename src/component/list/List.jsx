import React, { useRef, useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons"
import Listitems from '../listitems/Listitems'
import "./list.scss"

export default function List() {
    let [slider,setslider]=useState(0)
    let [moved,setmoved]=useState(false)

    const clickref=useRef()
    const handlecick = (direction)=>{
        setmoved(true)
        const distance=clickref.current.getBoundingClientRect().x-50
        // console.log(distance)
        if(direction==="left" && slider>0){
            setslider(slider-1)
            clickref.current.style.transform=`translateX(${230+distance}px)`
        }
        if(direction ==="right"&& slider<4){

            setslider(slider+1)
            clickref.current.style.transform=`translateX(${-230+distance}px)`
        }


    }
    
  return (
    <div className='list'>
        <span className="listtitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIosOutlined className='sliderarrow left' onClick={()=>handlecick("left")} style={{display:!moved && "none"}}  />
            <div className="container" ref={clickref}>
                <Listitems index={0}/>
                <Listitems index={1}/>
                <Listitems index={2}/>
                <Listitems index={3}/>
                <Listitems index={4}/>
                <Listitems index={5}/>
                <Listitems index={6}/>
                <Listitems index={7}/>
                <Listitems index={8}/>
                <Listitems index={9}/>
            </div>
            <ArrowForwardIosOutlined className='sliderarrow right' onClick={()=>handlecick("right")} />
        

        </div>
      
    </div>
  )
}
