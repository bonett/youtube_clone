import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Home from '../../containers/Home';
import Explore from '../../containers/Explore';
import Subscriptions from '../../containers/Subscriptions';
import Library from '../../containers/Library';
import History from '../../containers/History';
import Videos from '../../containers/Videos';
import Movies from '../../containers/Movies';
import WatchLater from '../../containers/Watch-later';
import { AppContainer } from './App.styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeThemeColor = this.changeThemeColor.bind(this);
  }

  componentDidMount = () => {
    const { fetchPopularVideos } = this.props;
    const payload = {
      query: 'apple'
    };
    fetchPopularVideos(payload);
  };

  changeThemeColor() {
    const { isDarkMode, setDarkMode } = this.props;
    if (isDarkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  render() {
    const { isDarkMode, popularVideos } = this.props;
    console.log(popularVideos, 'spopularVideos');
    return (
      <AppContainer isDarkMode={isDarkMode}>
        <Navbar
          onChangeToggle={this.changeThemeColor}
          isDarkMode={isDarkMode}
        />
        <div className="container-fluid">
          <div className="columns">
            <div className="column is-2">
              <Sidebar isDarkMode={isDarkMode} />
            </div>
            <div className="column is-10">
              <Breadcrumb isDarkMode={isDarkMode} />
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
            </div>
          </div>
        </div>
      </AppContainer>
    );
  }
}

App.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func,
  fetchPopularVideos: PropTypes.func,
  popularVideos: PropTypes.array
};

App.defaultProps = {
  setDarkMode: () => {},
  fetchPopularVideos: () => {},
  popularVideos: []
};

export default App;
