import { connect } from 'react-redux';
import * as appStore from '../../store/App';
import Details from '../../components/Details';
import { shuffle as _shuffle } from 'lodash';

function mapStateToProps(state, ownProps) {
  const { match } = ownProps;
  const appSelectors = appStore.selectors(state);
  const darkMode = appSelectors.getThemeApp();
  const apiResult = appSelectors.getPopularVideos();
  const { id } = match.params;
  const videoDetails = apiResult.value.filter((video) => {
    if (video.videoId === id) {
      return video;
    }
  });
  const recommendedList = apiResult.value.filter((video) => {
    if (video.videoId !== id) {
      return video;
    }
  });
  const videosRecommended = _shuffle(recommendedList);
  return {
    isdarkmode: darkMode,
    videoDetails: videoDetails[videoDetails.length - 1],
    videosRecommended
  };
}

export default connect(mapStateToProps, {})(Details);
