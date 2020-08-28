import React from 'react';
import userIcon from '../../assets/images/user-icon.jpg';

import './InfoBar.css'
const InfoBar = ({room, name}) => {
  return (
    <div className="infoBar">
    <div className="left">
      <a href="/">
        <span>&#8592;</span>
      </a>
    </div>
    <div className="mid">
      <h3>{room}</h3>
    </div>
    <div className="right">
      <div className="image_outer_container">
				<div className="green_icon"></div>
				<div className="image_inner_container">
					<img src={userIcon} alt="user-icon"/>
				</div>
			</div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  </div>
  );
};

export default InfoBar;