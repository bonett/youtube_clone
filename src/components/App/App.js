import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import Banner from '../Banner';
import Home from '../../containers/Home';
import Explore from '../../containers/Explore';
import Subscriptions from '../../containers/Subscriptions';
import Library from '../../containers/Library';
import History from '../../containers/History';
import Videos from '../../containers/Videos';
import Movies from '../../containers/Movies';
import WatchLater from '../../containers/Watch-later';
import { AppContainer, Main, Aside, Wrapper } from './App.styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false,
      isShowBanner: true
    };
    this.changeThemeColor = this.changeThemeColor.bind(this);
    this.switchPageByName = this.switchPageByName.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleCloseBanner = this.handleCloseBanner.bind(this);
  }

  componentDidMount = () => {
    const { fetchPopularVideos } = this.props;
    const payload = {
      query: 'apple'
    };
    fetchPopularVideos(payload);
  };

  handleSidebar() {
    const { openSidebar } = this.state;
    this.setState({
      openSidebar: !openSidebar
    });
  }

  handleCloseBanner() {
    const { isShowBanner } = this.state;
    this.setState({
      isShowBanner: !isShowBanner
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
    const { isDarkMode } = this.props;
    const { openSidebar, isShowBanner } = this.state;

    return (
      <AppContainer isDarkMode={isDarkMode}>
        <Navbar
          handleSidebar={this.handleSidebar}
          onChangeToggle={this.changeThemeColor}
          isDarkMode={isDarkMode}
        />
        <div className="container-fluid">
          <Main>
            <Aside>
              <Sidebar
                isDarkMode={isDarkMode}
                openSidebar={openSidebar}
                handleClickPage={this.switchPageByName}
              />
            </Aside>
            <Wrapper>
              {/*   <Breadcrumb isDarkMode={isDarkMode} /> */}
              <React.Fragment>
                {isShowBanner && (
                  <Banner handleCloseBanner={this.handleCloseBanner} />
                )}
              </React.Fragment>
              <Switch>
                <Route path="/home" component={Home} />
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
          </Main>
        </div>
      </AppContainer>
    );
  }
}

App.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func,
  fetchPopularVideos: PropTypes.func,
  history: PropTypes.object
};

App.defaultProps = {
  setDarkMode: () => {},
  fetchPopularVideos: () => {},
  history: {}
};

export default App;
