import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import App from '../../components/App';
import { defaultAll } from '../../config';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const apiResult = appSelectors.getPopularVideos();
  const userSubscription = appSelectors.getUserSubscription();
  const queryType = appSelectors.getQueryType();
  let suggestionsFiltered = defaultAll;

  const suggestions =
    apiResult.pivotSuggestions[apiResult.pivotSuggestions.length - 1]
      .suggestions;
  suggestions.filter((item) => {
    suggestionsFiltered.push({
      displayText: item.displayText,
      text: item.text
    });
  });

  return {
    isDarkMode: darkMode,
    userSubscription,
    suggestions: suggestionsFiltered,
    queryType
  };
}

export default connect(mapStateToProps, {
  setDarkMode: appStore.actions.setDarkMode,
  setUserSubscription: appStore.actions.setUserSubscription,
  fetchPopularVideos: appStore.actions.fetchPopularVideos
})(App);
