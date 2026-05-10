import React from 'react';
import './Header.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { signOut } from 'firebase/auth';

import { auth } from '../firebase';

function Header({ setUser }) {

  const logout = () => {

    signOut(auth);

    setUser(null);
  };

  return (
    <div className="header">

      <div className="header__left">

        <LinkedInIcon />

        <div className="header__search">

          <SearchIcon />

          <input
            type="text"
            placeholder="Search"
          />

        </div>

      </div>

      <div className="header__right">

        <div className="header__option">
          <HomeIcon />
          <h3>Home</h3>
        </div>

        <div className="header__option">
          <SupervisorAccountIcon />
          <h3>My Network</h3>
        </div>

        <div className="header__option">
          <BusinessCenterIcon />
          <h3>Jobs</h3>
        </div>

        <div className="header__option">
          <ChatIcon />
          <h3>Messaging</h3>
        </div>

        <div className="header__option">
          <NotificationsIcon />
          <h3>Notifications</h3>
        </div>

        <div
          className="header__option"
          onClick={logout}
        >
          <h3>Logout</h3>
        </div>

      </div>

    </div>
  );
}

export default Header;