import React from 'react';
import sendIcon from '../../assets/images/send.jpg'
import './Input.css';
const Input = ({ setMessage, sendMessage, message }) => (
  <div>
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={e => e.key ==='Enter' ? sendMessage(e) : null}
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>
        <img src={sendIcon} alt="send-icon"/>
      </button>
    </form>
  </div>
)

export default Input;