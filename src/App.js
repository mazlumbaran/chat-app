import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chats from './components/Chats'
import './components/style.css'
import ChatArea from './components/ChatArea'

const App = () => {
  return (
    <div className='app'>
    <Sidebar />
    <Header />
    <Chats />
    <ChatArea />
    </div>
  )
}

export default App
