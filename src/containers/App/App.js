import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import App from '../../components/App';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const queryType = appSelectors.getQueryType();
  const { query } = queryType;

  return {
    isdarkmode: darkMode,
    queryType: query
  };
}

export default connect(mapStateToProps, {
  setDarkMode: appStore.actions.setDarkMode,
  fetchPopularVideos: appStore.actions.fetchPopularVideos,
  setQueryType: appStore.actions.setQueryType
})(App);
