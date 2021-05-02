import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Home from '../../components/Home';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const apiResult = appSelectors.getPopularVideos();
  const userSubscription = appSelectors.getUserSubscription();
  const queryType = appSelectors.getQueryType();

  return {
    isdarkmode: darkMode,
    popularVideos: apiResult.value,
    userSubscription,
    queryType
  };
}

export default connect(mapStateToProps, {
  fetchPopularVideos: appStore.actions.fetchPopularVideos,
  setUserSubscription: appStore.actions.setUserSubscription
})(Home);
