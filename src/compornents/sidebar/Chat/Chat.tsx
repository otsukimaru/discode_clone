import React from 'react'
import "./Chat.scss"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat() {
  return (
    <div className='chat'>
        {/* {chatheader} */}
        <ChatHeader />
        
        {/* {chatMessage} */}
        <div className="chatMessage">
          <ChatMessage/>
        </div>

        {/* {chatInput} */}
        <div className="chatInput">
          <AddCircleOutlineIcon/>
          <form action="">
            <input type="text" placeholder='#udemyへメッセージを送信'/>
            <button type='submit' className='chatInputButton'>送信</button>
          </form>
          <div className="chatInputIcons">
            <CardGiftcardIcon/>
            <GifIcon/>
            <EmojiEmotionsIcon/>
          </div>
        </div>
    </div>
  )
}

export default Chat