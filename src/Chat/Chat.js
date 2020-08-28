import React, { useEffect, useState } from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
    const [seed, setSeed] = useState(''); //random Avator
    const [inputMsg, setInputMsg] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('msg', inputMsg)
        setInputMsg('')
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>

            <div className='chat__body'>
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className='chat__name'>Suhail</span>
                        Hey You
             <span className='chat__timestamp'>4:40pm </span>
                </p>
            </div>
            <div className='chat__footer'>
                <EmojiEmotionsIcon />
                <form>
                    <input
                        value={inputMsg}
                        onChange={e => setInputMsg(e.target.value)}
                        type='text' />
                    <button
                        onClick={sendMessage}
                    >send the message</button>
                </form>
                <MicIcon />

            </div>

        </div>
    );
}

export default Chat;
