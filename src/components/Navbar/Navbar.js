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
  Search,
  Span
} from './Navbar.styled';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSelectedSearch = this.handleInputSearch.bind(this);
    this.searchData = this.searchData.bind(this);
  }

  componentDidMount() {
    const { fetchPopularVideos, queryType } = this.props;
    fetchPopularVideos(queryType);
  }

  handleInputSearch(value) {
    this.setState({
      value
    });
  }

  searchData(e) {
    const { fetchPopularVideos, setQueryType } = this.props;
    const { value } = this.state;

    if (e.keyCode === 13) {
      setQueryType(value);
      fetchPopularVideos(value);
    }
  }

  handleSelectedSearch() {}

  render() {
    const { isdarkmode, onChangeToggle, handleSidebar } = this.props;
    const { value } = this.state;
    return (
      <NavigationBar className="navbar" isdarkmode={isdarkmode}>
        <Brand isdarkmode={isdarkmode}>
          <span className="btn-burger material-icons" onClick={handleSidebar}>
            menu
          </span>
          <Link className="navbar-item" to="/">
            <img
              src={!isdarkmode ? logoLight : logoDark}
              width="112"
              height="28"
            />
          </Link>
        </Brand>
        <Search isdarkmode={isdarkmode}>
          <div className="field">
            <p className="control has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Search"
                defaultValue={value}
                onChange={(e) => this.handleInputSearch(e.target.value)}
                onKeyUp={(e) => this.searchData(e)}
              />
              <span className="icon is-small is-right">
                <span className="material-icons">search</span>
              </span>
            </p>
          </div>
          <Span className="material-icons" isdarkmode={isdarkmode}>
            mic
          </Span>
        </Search>
        <Menu isdarkmode={isdarkmode}>
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
                    <Name isdarkmode={isdarkmode}>Wilfrido Bonett</Name>
                    <Email isdarkmode={isdarkmode}>wbonett10@gmail.com</Email>
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
                    isdarkmode={isdarkmode}
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
  isdarkmode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func,
  handleSidebar: PropTypes.func,
  fetchPopularVideos: PropTypes.func,
  pathname: PropTypes.any,
  queryType: PropTypes.string,
  setQueryType: PropTypes.func
};

Navbar.defaultProps = {
  onChangeToggle: () => {},
  handleSidebar: () => {},
  fetchPopularVideos: () => {},
  setQueryType: () => {}
};

export default Navbar;
