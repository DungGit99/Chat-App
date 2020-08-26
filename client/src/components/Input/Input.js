import React from 'react';
import sendIcon from '../../assets/images/send.jpg'
import './Input.css';
const Input = () => (
  <div>
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        //value={message}
        //onChange={({ target: { value } }) => setMessage(value)}
        //onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton">
        <img src={sendIcon} alt="send-icon"/>
      </button>
    </form>
  </div>
)

export default Input;