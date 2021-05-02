import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Home from '../../containers/Home';
import Explore from '../../containers/Explore';
import Subscriptions from '../../containers/Subscriptions';
import Library from '../../containers/Library';
import History from '../../containers/History';
import Videos from '../../containers/Videos';
import Movies from '../../containers/Movies';
import WatchLater from '../../containers/Watch-later';
import Details from '../../containers/Details';
import { AppContainer, Content, Aside, Wrapper } from './App.styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
    this.changeThemeColor = this.changeThemeColor.bind(this);
    this.switchPageByName = this.switchPageByName.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar() {
    const { openSidebar } = this.state;
    this.setState({
      openSidebar: !openSidebar
    });
  }

  changeThemeColor() {
    const { isDarkMode, setDarkMode } = this.props;
    if (isDarkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  switchPageByName(path) {
    const { history } = this.props;
    history.push(`/${path}`);
  }

  render() {
    const { isDarkMode, location } = this.props;
    const { openSidebar } = this.state;
    const { pathname } = location;

    return (
      <AppContainer isDarkMode={isDarkMode}>
        <Navbar
          pathname={pathname}
          handleSidebar={this.handleSidebar}
          onChangeToggle={this.changeThemeColor}
          isDarkMode={isDarkMode}
        />
        <main>
          <div className="container-fluid">
            <Content>
              <Aside id="asideId">
                <Sidebar
                  pathname={pathname}
                  isDarkMode={isDarkMode}
                  openSidebar={openSidebar}
                  handleClickPage={this.switchPageByName}
                />
              </Aside>
              <Wrapper id="main">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/watch/:id" component={Details} />
                  <Route path="/explore" component={Explore} />
                  <Route path="/subscriptions" component={Subscriptions} />
                  <Route path="/library" component={Library} />
                  <Route path="/history" component={History} />
                  <Route path="/videos" component={Videos} />
                  <Route path="/movies" component={Movies} />
                  <Route path="/watch-later" component={WatchLater} />
                  <Redirect path="*" to={`/home`} />
                </Switch>
              </Wrapper>
            </Content>
          </div>
        </main>
      </AppContainer>
    );
  }
}

App.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object
};

App.defaultProps = {
  setDarkMode: () => {},
  history: {},
  suggestions: []
};

export default App;
