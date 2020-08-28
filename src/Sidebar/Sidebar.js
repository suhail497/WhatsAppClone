import React from 'react';
import "./Sidebar.css"
import SidebarChat from '../SidebarChat/SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from "@material-ui/icons/SearchOutlined";




const Sidebar = () => {
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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat/>
                

            </div>






        </div>
    );
}

export default Sidebar;
