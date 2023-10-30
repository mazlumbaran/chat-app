import React from 'react'
import './style.css'
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications,IoSettings } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";




const Sidebar = () => {
  return (
    <div className='sidebar'>
        
          <div className='sidebar-context-top'>
            <div className='button'> <AiFillHome/></div>
            <div className='button'> <IoSettings/></div>
          </div>
          <div className='sidebar-context-bottom'>
            <div className='button'> <IoNotifications/></div>
            <div className='user'> <FaUserAlt/></div>
          </div>
        
    </div>
  )
}

export default Sidebar