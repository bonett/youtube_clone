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
      showBanner: true
    };
    this.changeThemeColor = this.changeThemeColor.bind(this);
    this.switchPageByName = this.switchPageByName.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleCloseBanner = this.handleCloseBanner.bind(this);
    this.acceptSubscription = this.acceptSubscription.bind(this);
  }

  componentDidMount = () => {
    const { fetchPopularVideos, userSubscription } = this.props;
    const payload = {
      query: 'all'
    };

    if (!userSubscription) {
      this.setState({
        showBanner: true
      });
    }

    fetchPopularVideos(payload);
  };

  componentDidUpdate(prevProps) {
    const { userSubscription } = this.props;
    if (prevProps.userSubscription !== userSubscription) {
      this.setState({
        openSidebar: false
      });
    }
  }

  handleSidebar() {
    const { openSidebar } = this.state;
    this.setState({
      openSidebar: !openSidebar
    });
  }

  handleCloseBanner() {
    this.setState({
      showBanner: false
    });
  }

  acceptSubscription() {
    const { setUserSubscription } = this.props;
    this.setState({
      showBanner: false
    });
    setUserSubscription(true);
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
    const { isDarkMode, suggestions, queryType, location } = this.props;
    const { openSidebar, showBanner } = this.state;
    const { pathname } = location;

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
                pathname={pathname}
                isDarkMode={isDarkMode}
                openSidebar={openSidebar}
                handleClickPage={this.switchPageByName}
              />
            </Aside>
            <Wrapper>
              <React.Fragment>
                <Breadcrumb
                  isDarkMode={isDarkMode}
                  queryType={queryType}
                  suggestions={suggestions}
                />
              </React.Fragment>
              <React.Fragment>
                {showBanner && (
                  <Banner
                    handleCloseBanner={this.handleCloseBanner}
                    acceptSubscription={this.acceptSubscription}
                  />
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
  userSubscription: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func,
  setUserSubscription: PropTypes.func,
  fetchPopularVideos: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  suggestions: PropTypes.array,
  queryType: PropTypes.string.isRequired
};

App.defaultProps = {
  setDarkMode: () => {},
  setUserSubscription: () => {},
  fetchPopularVideos: () => {},
  history: {},
  suggestions: []
};

export default App;
