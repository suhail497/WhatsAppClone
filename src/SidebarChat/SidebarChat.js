import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import "./SidebarChat.css"
import db from '../Firebase/Firebase';
import { Link } from "react-router-dom"






const SidebarChat = ({ addNewChat, name, id }) => {
    const [seed, setSeed] = useState('');//avater
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if (id) {

            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot(snapshot =>
                    setMessages(
                        snapshot.docs.map
                            (doc => doc.data())
                    )

                )


        }

    }, [id])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])


    // for newChat
    const createChat = () => {
        const roomName = prompt("please enter new chat");
        if (roomName) {
            db.collection("rooms").add(
                {
                    name: roomName
                }
            )
        }
    }



    // if condtion

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarchat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='sidebarchat__info'>
                    <h2>{name}</h2>
                    <p>{
                        messages[0]?.message
                    }
                    </p>

                </div>

            </div>
        </Link>

    ) : (
            <div className='sidebarchat' onClick={createChat} >
                <h2>AddNew chat</h2>
            </div>
        )
}

export default SidebarChat;
