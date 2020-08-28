import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import "./SidebarChat.css"






const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])


    // for newChat
    const createChat = () => {
        const roomName = prompt("please enter new chat");
        if (roomName) {
            // .....
        }
    }



    // if condtion

    return !addNewChat ? (
        <div className='sidebarchat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarchat__info'>
                <h2>Room Name</h2>
                <p>hey budddy</p></div>

        </div>
    ) : (
            <div className='sidebarchat' onClick={createChat} >
                <h2>AddNew chat</h2>
            </div>
        )
}

export default SidebarChat;
