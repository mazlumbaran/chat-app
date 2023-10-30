import React, { useState } from 'react'

const Chats = () => {
  const [chats, setChats] = useState([
    { photo: '', name: 'Mustafa Saydam', message: 'Merhaba' },
    { photo: '', name: 'Hasan Kılıç', message: 'Merhaba nasılsın nasıl gidotırodfsf' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
    { photo: '', name: 'MERT Saydam', message: 'Merhaasdasdmasmd asmdamsasdasdadba' },
  ])
  return (
    <div className='chats'>
      <div className='chats-context'>
        <div className='chats-header'><h1>Mesajlar</h1></div>
        {chats.map((chat, index) => {
          return (
            <div key={index} className='chat'>
              <div className='profile-photo'><img src={chat.photo} alt='' /></div>
              <div className='chat-info'>
                <div className='chat-name'>{chat.name}</div>
                <div className='chat-message'>{chat.message.slice(0, 20)}...</div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Chats