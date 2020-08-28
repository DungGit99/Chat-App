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
    const ENDPOINT = 'http://localhost:5000';
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const [ users, setUsers ] = useState('');
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    useEffect(()=>{
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT); // connect to server
        setRoom(room);
        setName(name);
        // Emits an event to the socket identified by the string name.
        socket.emit('join', { name, room }, (error) => {
            if(error) {
              alert(error);
            }
         });
    },[ENDPOINT,location.search])
    useEffect(() => {
        socket.on('message', message => {
            setMessagesList([...messagesList,message])
        })
    },[messagesList])
    const sendMessage = e => {
        e.preventDefault()
        if(message) {
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    console.log(messagesList);
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} name={name}/>
                <UserOnline users={users}/>
                <Messages/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;