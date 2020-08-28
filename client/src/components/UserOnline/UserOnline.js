import React from 'react';
import userOnline from '../../assets/images/user-online.jpg'
import './UserOnline.css'
const UserOnline = () => {
  return (
    <div className="user_online">
      <div className="ml">
        <div className="image_outer_container_online">
          <div className="green_icon"></div>
          <div className="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 1</span>
        </div>
      </div>
    </div>
  );
};

export default UserOnline;