import React from 'react';
import PropTypes from 'prop-types';
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
  ManageAccount
} from './Navbar.styled';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  };

  render() {
    const { isDarkMode, onChangeToggle } = this.props;

    return (
      <NavigationBar className="navbar" isDarkMode={isDarkMode}>
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a className="navbar-item" href="https://bulma.io">
            <img
              src={!isDarkMode ? logoLight : logoDark}
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {/*  <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div> */}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
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
                    <a className="navbar-link photo">
                      <UserPhoto src={defaultUser} />
                    </a>

                    <div className="navbar-dropdown is-right">
                      <Profile>
                        <Photo>
                          <UserPhoto src={defaultUser} />
                        </Photo>
                        <Info>
                          <Name isDarkMode={isDarkMode}>Wilfrido Bonett</Name>
                          <Email isDarkMode={isDarkMode}>
                            wbonett10@gmail.com
                          </Email>
                          <ManageAccount>
                            Manage your Google Account
                          </ManageAccount>
                        </Info>
                      </Profile>
                      <hr className="navbar-divider" />
                      <a className="navbar-item">
                        <i className="icon material-icons">account_box</i> Your
                        channel
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">paid</i> Purchases
                        and memberships
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">
                          settings_applications
                        </i>{' '}
                        Youtube Studio
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">switch_account</i>{' '}
                        Switch Account
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
                        <i className="icon material-icons">g_translate</i>{' '}
                        Language
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">language</i> Location
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">settings</i> Settings
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">
                          admin_panel_settings
                        </i>{' '}
                        Your data in YouTube
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">help</i> Help
                      </a>
                      <a className="navbar-item">
                        <i className="icon material-icons">feedback</i> Send
                        feedback
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
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
    );
  }
}

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func
};

Navbar.defaultProps = {
  onChangeToggle: () => {}
};

export default Navbar;
