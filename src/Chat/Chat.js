import React, { useEffect, useState } from 'react';
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom"
import { useStateValue } from '../contextapi/StateProvider';

import db from '../Firebase/Firebase';
import firebase from "firebase"


const Chat = () => {
    const [seed, setSeed] = useState(''); //random Avator
    const [inputMsg, setInputMsg] = useState('') // for meg
    const { roomId } = useParams(); //
    const [roomName, setRoomName] = useState()
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue() //context api

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomName(
                        snapshot.data().name
                    )
                ));
            db.collection("rooms")
                .doc(roomId) //reactrouter
                .collection('messages')
                .orderBy("timestamp", "asc")
                .onSnapshot(snapshot => (
                    setMessages(
                        snapshot.docs.map(doc => (
                            doc.data()
                        ))

                    )
                ))
        }
    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        // console.log('msg', inputMsg)
        db.collection("rooms").doc(roomId)
            .collection("messages").add({

                message: inputMsg,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

        setInputMsg('')
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>
                        last seen {""}
                        {
                            new Date(
                                messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()
                        }</p>
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
                {
                    messages.map(message =>
                        <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                            <span className='chat__name'>{message.name}</span>
                            {message.message}
                            <span className='chat__timestamp'>
                                {
                                    new Date(message.timestamp?.toDate()).toUTCString()
                                }
                            </span>
                        </p>
                    )
                }

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
