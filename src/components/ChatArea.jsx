import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { RiEmojiStickerLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';



const ChatArea = () => {
    const [messages, setMessages] = useState([
        { message: 'Merhabaqwdjwdjqwdqn  qweeqwdqwjdqnwd qkwenjkqwkjejkqwjke qwjeqjwejkq', sender: 'Ahmet' },
        { message: 'Nasılsın? asdjhkashjkdahkjsd asdjajksdkhjakjsd asdjajksdkhjashdahjksd', sender: 'User' }])
    const [status, setstatus] = useState('çevrimiçi')
    const [emojiShow, setEmojiShow] = useState(false)
    const [message, setMessage] = useState('')

    const handleMessage = (e) => {
       setMessage(e.emoji? e.emoji : e.target.value)
    }


    return (
        <div className='chat-area'>
            <div className='chat-header'>
                <div className='profile-photo'><img src="" alt='' /></div>
                <div className='profile-name'>
                    <h4>Ahmet Yılmaz</h4>
                    <div className='status-info'>
                        <div className='status'></div>
                        <p>{status}</p>
                    </div>
                </div>
            </div>

            <div className='chat-body'>
                {messages.map((message, index) => {
                    return (
                        <div key={index} className='message-list'>
                            <div className={`message ${message.sender === 'User' ? 'sent' : 'received'}`}>{message.message}</div>
                        </div>
                    )
                })}
            </div>
            <div className={`emoji ${emojiShow? '': 'hidden'}` }><EmojiPicker theme='dark' onEmojiClick={(e)=> handleMessage(e)}/></div>


            <div className='chat-textbox'>
                <textarea rows='4' placeholder='Mesajınızı Buraya Yazın' value={message} onChange={(e)=> handleMessage(e)}/>
                <div className='chat-textbox-icons'>
                    <button className='send-button' onClick={()=> setEmojiShow(!emojiShow)}><RiEmojiStickerLine /></button>
                    <button className='send-button'><BsFillSendFill /></button>
                </div>
            </div>
        </div>
    )
}

export default ChatArea