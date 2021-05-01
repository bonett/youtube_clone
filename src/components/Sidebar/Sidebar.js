import React from 'react';
import PropTypes from 'prop-types';
import { Aside, Item } from './Sidebar.styled';

function Sidebar({ isDarkMode }) {
  return (
    <Aside className="menu is-hidden-mobile">
      <ul className="menu-list">
        <li>
          <Item class="is-active" isDarkMode={isDarkMode}>
            {' '}
            <i className="icon material-icons">home</i> Home
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">explore</i> Explore
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">subscriptions</i> Subscriptions
          </Item>
        </li>
        <hr />
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">video_library</i> Library
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">history</i> History
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">slideshow</i> Videos
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">theaters</i> Movies
          </Item>
        </li>
        <li>
          <Item isDarkMode={isDarkMode}>
            <i className="icon material-icons">watch_later</i> Watch later
          </Item>
        </li>
      </ul>
    </Aside>
  );
}

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Sidebar.defaultProps = {};

export default Sidebar;
