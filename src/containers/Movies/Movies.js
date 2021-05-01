import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Movies from '../../components/Movies';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();

  return {
    isDarkMode: darkMode
  };
}

export default connect(mapStateToProps, {})(Movies);
