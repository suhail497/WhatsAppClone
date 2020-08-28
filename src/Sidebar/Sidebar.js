import React, { useState, useEffect } from 'react';
import "./Sidebar.css"
import SidebarChat from '../SidebarChat/SidebarChat';
import db from '../Firebase/Firebase';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from "@material-ui/icons/SearchOutlined";




const Sidebar = () => {
    const [rooms, setRooms] = useState([]) //accordind firebase stored in array

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return () => {
            unsubscribe()
        }


    }, [])


    return (
        <div className="sidebar">
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchbox-container'>
                    <SearchOutlined />
                    <input placeholder="search the chats " />
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                {
                    rooms.map(room => (

                        <SidebarChat
                            key={room.id} id={room.id} name={room.data.name}
                        />

                    ))
                }



            </div>






        </div>
    );
}

export default Sidebar;
