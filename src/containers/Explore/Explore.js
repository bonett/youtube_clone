import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Explore from '../../components/Explore';

function mapStateToProps(state) {
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();

  return {
    isdarkmode: darkMode
  };
}

export default connect(mapStateToProps, {})(Explore);
