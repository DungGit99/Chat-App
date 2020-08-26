import React from 'react';
import './Messages.css'
const Messages = () => {
  return (
    <div className="messages">
      <div className="messageContainer justifyStart">
      <p className="sentText pl-10 ">Dung Code</p>
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">You love me</p>
        </div>
      </div>
      <div className="messageContainer justifyEnd">
        {/* <p className="sentText pr-10">A</p> */}
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">I love you</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;