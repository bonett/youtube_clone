import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Home from '../../components/Home';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const apiResult = appSelectors.getPopularVideos();

  return {
    isDarkMode: darkMode,
    popularVideos: apiResult.value
  };
}

export default connect(mapStateToProps, {})(Home);
