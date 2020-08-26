import React from 'react';
import userOnline from '../../assets/images/user-online.jpg'
import './UserOnline.css'
const UserOnline = () => {
  return (
    <div className="user_online">
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 1</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 2</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 3</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 4</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 5</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 6</span>
        </div>
      </div>
      <div className="ml">
        <div class="image_outer_container_online">
          <div class="green_icon"></div>
          <div class="image_inner_container_online">
            <img src={userOnline} alt="user-icon"/>
          </div>
        </div>
        <div>
          <span className="user_name">User 7</span>
        </div>
      </div>
    </div>
  );
};

export default UserOnline;