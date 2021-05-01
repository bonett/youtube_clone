import React from 'react';
import PropTypes from 'prop-types';
import { Aside, Item } from './Sidebar.styled';

function Sidebar({ isDarkMode, handleClickPage, openSidebar }) {
  console.log(openSidebar);
  return (
    <Aside className="menu">
      <ul className="menu-list">
        <li>
          <Item
            class="is-active"
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('home')}
          >
            {' '}
            <i className="icon material-icons">home</i> Home
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('explore')}
          >
            <i className="icon material-icons">explore</i> Explore
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('subscriptions')}
          >
            <i className="icon material-icons">subscriptions</i> Subscriptions
          </Item>
        </li>
        <hr className="hidden-mobile" />
        <li>
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('library')}
          >
            <i className="icon material-icons">video_library</i> Library
          </Item>
        </li>
        <li className="hidden-mobile">
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('history')}
          >
            <i className="icon material-icons">history</i> History
          </Item>
        </li>
        <li className="hidden-mobile">
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('videos')}
          >
            <i className="icon material-icons">slideshow</i> Videos
          </Item>
        </li>
        <li className="hidden-mobile">
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('movies')}
          >
            <i className="icon material-icons">theaters</i> Movies
          </Item>
        </li>
        <li className="hidden-mobile">
          <Item
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('watch-later')}
          >
            <i className="icon material-icons">watch_later</i> Watch later
          </Item>
        </li>
      </ul>
    </Aside>
  );
}

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  openSidebar: PropTypes.bool.isRequired,
  handleClickPage: PropTypes.func
};

Sidebar.defaultProps = {
  handleClickPage: () => {}
};

export default Sidebar;
