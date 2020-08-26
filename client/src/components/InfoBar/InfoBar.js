import React from 'react';
import userIcon from '../../assets/images/user-icon.jpg';

import './InfoBar.css'
const InfoBar = () => {
  return (
    <div className="infoBar">
    <div className="left">
      <a href="/">
        <span>&#8592;</span>
      </a>
    </div>
    <div className="mid">
      <h3>Room 1</h3>
    </div>
    <div className="right">
      <div class="image_outer_container">
				<div class="green_icon"></div>
				<div class="image_inner_container">
					<img src={userIcon} alt="user-icon"/>
				</div>
			</div>
      <div>
        <span>Code99</span>
      </div>
    </div>
  </div>
  );
};

export default InfoBar;