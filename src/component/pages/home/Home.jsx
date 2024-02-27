import React from 'react'
import "./Home.scss"
import Navbar from '../../Navbar/navbar'
import Featured from '../../featured/Featured'
import List from '../../list/List'

export default function Home() {
  return (
    <div className='home'>
    <Navbar/>
    <Featured />
    <List/>
    <List/>
    <List/>
    <List/>
    </div>
  )
}
