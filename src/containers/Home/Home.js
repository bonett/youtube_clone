import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Home from '../../components/Home';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const popularVideos = appSelectors.getPopularVideos();
  const userSubscription = appSelectors.getUserSubscription();
  const queryType = appSelectors.getQueryType();
  const isloading = appSelectors.getLoadingState();

  return {
    isdarkmode: darkMode,
    popularVideos,
    userSubscription,
    queryType,
    isloading
  };
}

export default connect(mapStateToProps, {
  setUserSubscription: appStore.actions.setUserSubscription
})(Home);
