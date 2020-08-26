import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import './Chat.css'
import UserOnline from '../UserOnline/UserOnline';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
let socket;
const queryString = require('query-string');

const Chat = ({ location })=>{
    const ENDPOINT = 'localhost:5000';
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    useEffect(()=>{
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT); // connect to server
        setRoom(room);
        setName(name);
        socket.emit('join',{ name, room }) // Emits an event to the socket identified by the string name.
    },[ENDPOINT,location.search])
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar/>
                <UserOnline/>
                <Messages/>
                <Input/>
            </div>
        </div>
    )
}

export default Chat;