import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Aside, Item } from './Sidebar.styled';

function Sidebar({ isDarkMode, pathname, handleClickPage }) {
  return (
    <Aside className="menu" id="mySidenav">
      <ul className="menu-list">
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/home'
            })}
            onClick={() => handleClickPage('home')}
          >
            {' '}
            <i className="icon material-icons">home</i> Home
          </Item>
        </li>
        <li>
          <Item
            className={classnames({
              'is-active': pathname === '/explore'
            })}
            isDarkMode={isDarkMode}
            onClick={() => handleClickPage('explore')}
          >
            <i className="icon material-icons">explore</i> Explore
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/subscriptions'
            })}
            onClick={() => handleClickPage('subscriptions')}
          >
            <i className="icon material-icons">subscriptions</i> Subscriptions
          </Item>
        </li>
        <hr className="hidden-mobile" />
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/library'
            })}
            onClick={() => handleClickPage('library')}
          >
            <i className="icon material-icons">video_library</i> Library
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/history'
            })}
            onClick={() => handleClickPage('history')}
          >
            <i className="icon material-icons">history</i> History
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/videos'
            })}
            onClick={() => handleClickPage('videos')}
          >
            <i className="icon material-icons">slideshow</i> Videos
          </Item>
        </li>
        <li>
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/movies'
            })}
            onClick={() => handleClickPage('movies')}
          >
            <i className="icon material-icons">theaters</i> Movies
          </Item>
        </li>
        <li className="hidden-mobile">
          <Item
            isDarkMode={isDarkMode}
            className={classnames({
              'is-active': pathname === '/watch-later'
            })}
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
  /* openSidebar: PropTypes.bool.isRequired, */
  handleClickPage: PropTypes.func,
  pathname: PropTypes.string
};

Sidebar.defaultProps = {
  handleClickPage: () => {}
};

export default Sidebar;
