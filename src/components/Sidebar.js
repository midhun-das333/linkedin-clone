import React from 'react';
import './Sidebar.css';

import Avatar from '@mui/material/Avatar';

function Sidebar({ user }) {
  return (
    <div className="sidebar">

      <div className="sidebar__top">

        <Avatar src={user.photoURL} />

        <h2>{user.displayName}</h2>

        <h4>{user.email}</h4>

      </div>

      <div className="sidebar__stats">

        <div className="sidebar__stat">

          <p>Connections</p>

          <p className="sidebar__statNumber">
            120
          </p>

        </div>

        <div className="sidebar__stat">

          <p>Who viewed you</p>

          <p className="sidebar__statNumber">
            54
          </p>

        </div>

      </div>

      <div className="sidebar__bottom">

        <p>Recent</p>

        <div className="sidebar__recentItem">
          <p>#reactjs</p>
        </div>

        <div className="sidebar__recentItem">
          <p>#firebase</p>
        </div>

        <div className="sidebar__recentItem">
          <p>#javascript</p>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;