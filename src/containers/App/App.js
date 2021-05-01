import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import App from '../../components/App';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const popularVideos = appSelectors.getPopularVideos();

  return {
    isDarkMode: darkMode,
    popularVideos
  };
}

export default connect(mapStateToProps, {
  setDarkMode: appStore.actions.setDarkMode,
  fetchPopularVideos: appStore.actions.fetchPopularVideos
})(App);
