import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import App from '../../components/App';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();

  return {
    isDarkMode: darkMode
  };
}

export default connect(mapStateToProps, {
  setDarkMode: appStore.actions.setDarkMode
})(App);
