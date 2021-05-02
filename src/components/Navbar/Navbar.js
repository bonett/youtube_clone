import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import logoDark from '../../static/images/logo-dark.png';
import logoLight from '../../static/images/logo-light.png';
import defaultUser from '../../static/images/user.png';
import {
  NavigationBar,
  UserPhoto,
  Profile,
  Photo,
  Info,
  Name,
  Email,
  ManageAccount,
  Menu,
  Brand,
  Search
} from './Navbar.styled';
import { defaultSuggestions } from '../../config';
import Autocomplete from 'react-autocomplete';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSelectedSearch = this.handleInputSearch.bind(this);
  }

  componentDidMount = () => {
    const { fetchVideos } = this.props;
    fetchVideos();
    /* const burger = document.querySelector('.burger');
    const menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }); */
  };

  handleInputSearch(e) {
    console.log('handleInputSearch', e);
    this.setState({
      value: e
    });
  }

  handleSelectedSearch(e) {
    console.log('handleSelectedSearch', e);
  }

  render() {
    const { isDarkMode, onChangeToggle, handleSidebar } = this.props;
    const { value } = this.state;
    return (
      <NavigationBar className="navbar" isDarkMode={isDarkMode}>
        <Brand isDarkMode={isDarkMode}>
          <span
            id="btn-burger"
            className="btn-burger material-icons"
            onClick={handleSidebar}
          >
            menu
          </span>
          <Link className="navbar-item" to="/">
            <img
              src={!isDarkMode ? logoLight : logoDark}
              width="112"
              height="28"
            />
          </Link>
        </Brand>
        <Search isDarkMode={isDarkMode}>
          <Autocomplete
            placeholder="Search"
            getItemValue={(item) => item.text}
            items={defaultSuggestions}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                key={item.text}
              >
                {item.displayText}
              </div>
            )}
            value={value}
            onChange={(e) => this.handleInputSearch(e.target.value)}
            onSelect={(item) => this.handleSelectedSearch(item)}
          />
        </Search>
        <Menu isDarkMode={isDarkMode}>
          <a>
            <i className="icon material-icons">video_call</i>
          </a>
          <a>
            <i className="icon material-icons">apps</i>
          </a>
          <a>
            <i className="icon material-icons">notifications</i>
          </a>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="photo">
                <UserPhoto src={defaultUser} />
              </div>

              <div className="navbar-dropdown is-right">
                <Profile>
                  <Photo>
                    <UserPhoto src={defaultUser} />
                  </Photo>
                  <Info>
                    <Name isDarkMode={isDarkMode}>Wilfrido Bonett</Name>
                    <Email isDarkMode={isDarkMode}>wbonett10@gmail.com</Email>
                    <ManageAccount>Manage your Google Account</ManageAccount>
                  </Info>
                </Profile>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <i className="icon material-icons">account_box</i> Your
                  channel
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">paid</i> Purchases and
                  memberships
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">settings_applications</i>{' '}
                  Youtube Studio
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">switch_account</i> Switch
                  Account
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">logout</i> Sign Out
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <i className="icon material-icons">format_color_fill</i>{' '}
                  Appearance{' '}
                  <Toggle
                    isDarkMode={isDarkMode}
                    onChangeToggle={onChangeToggle}
                  />
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">g_translate</i> Language
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">language</i> Location
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">settings</i> Settings
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">admin_panel_settings</i>{' '}
                  Your data in YouTube
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">help</i> Help
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">feedback</i> Send feedback
                </a>
                <a className="navbar-item">
                  <i className="icon material-icons">keyboard</i> Keyboard
                  shortcuts
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Restricted mode: off</a>
              </div>
            </div>
          </div>
        </Menu>
      </NavigationBar>
    );
  }
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func,
  fetchVideos: PropTypes.func,
  handleSidebar: PropTypes.func
};

Navbar.defaultProps = {
  onChangeToggle: () => {},
  fetchVideos: () => {},
  handleSidebar: () => {}
};

export default Navbar;
