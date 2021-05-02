import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import WatchLater from '../../components/Watch-later';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();

  return {
    isdarkmode: darkMode
  };
}

export default connect(mapStateToProps, {})(WatchLater);
