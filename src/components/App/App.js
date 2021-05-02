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
      openSidebar: true
    };
    this.changeThemeColor = this.changeThemeColor.bind(this);
    this.switchPageByName = this.switchPageByName.bind(this);
    this.handleEffectSidebar = this.handleEffectSidebar.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  componentDidMount() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('mySidenav').style.overflow = 'auto';
  }

  handleSidebar() {
    const { openSidebar } = this.state;

    this.setState({
      openSidebar: !openSidebar
    });

    this.handleEffectSidebar(openSidebar);
  }

  handleEffectSidebar(status) {
    if (status) {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('mySidenav').style.overflow = 'hidden';
      document.getElementById('main').style.marginLeft = '0';
    } else {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementById('mySidenav').style.overflow = 'auto';
    }
  }

  changeThemeColor() {
    const { isdarkmode, setDarkMode } = this.props;
    if (isdarkmode) {
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
    const {
      isdarkmode,
      location,
      fetchPopularVideos,
      setQueryType,
      queryType
    } = this.props;
    const { openSidebar } = this.state;
    const { pathname } = location;

    return (
      <AppContainer isdarkmode={isdarkmode}>
        <Navbar
          pathname={pathname}
          fetchPopularVideos={fetchPopularVideos}
          handleSidebar={this.handleSidebar}
          onChangeToggle={this.changeThemeColor}
          isdarkmode={isdarkmode}
          setQueryType={setQueryType}
          queryType={queryType}
        />
        <main>
          <div className="container-fluid">
            <Content>
              <Aside id="asideId">
                <Sidebar
                  pathname={pathname}
                  isdarkmode={isdarkmode}
                  openSidebar={openSidebar}
                  handleClickPage={this.switchPageByName}
                />
              </Aside>
              <Wrapper isdarkmode={isdarkmode} id="main">
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
  isdarkmode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  fetchPopularVideos: PropTypes.func,
  queryType: PropTypes.string,
  setQueryType: PropTypes.func
};

App.defaultProps = {
  setDarkMode: () => {},
  history: {},
  suggestions: [],
  fetchPopularVideos: () => {},
  setQueryType: () => {}
};

export default App;
