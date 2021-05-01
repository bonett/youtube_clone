import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import App from '../../components/App';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const popularVideos = appSelectors.getPopularVideos();
  const userSubscription = appSelectors.getUserSubscription();

  return {
    isDarkMode: darkMode,
    popularVideos,
    userSubscription
  };
}

export default connect(mapStateToProps, {
  setDarkMode: appStore.actions.setDarkMode,
  setUserSubscription: appStore.actions.setUserSubscription,
  fetchPopularVideos: appStore.actions.fetchPopularVideos
})(App);
