import React from 'react';
import PropTypes from 'prop-types';
import CardVideo from '../Card';
import { HomeSection, Columns } from './Home.styled';
import Breadcrumb from '../../components/Breadcrumb';
import Banner from '../../components/Banner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: true };
    this.handleCloseBanner = this.handleCloseBanner.bind(this);
    this.viewDetailsPage = this.viewDetailsPage.bind(this);
    this.acceptSubscription = this.acceptSubscription.bind(this);
  }

  componentDidMount = () => {
    const { userSubscription, fetchPopularVideos } = this.props;
    const payload = {
      query: 'all'
    };

    if (!userSubscription) {
      this.setState({
        showBanner: true
      });
    }

    fetchPopularVideos(payload);
  };

  componentDidUpdate(prevProps) {
    const { userSubscription } = this.props;
    if (prevProps.userSubscription !== userSubscription) {
      this.setState({
        openSidebar: false
      });
    }
  }

  viewDetailsPage(id) {
    const { history } = this.props;
    history.push(`/watch/${id}`);
  }

  handleCloseBanner() {
    this.setState({
      showBanner: false
    });
  }

  acceptSubscription() {
    const { setUserSubscription } = this.props;
    this.setState({
      showBanner: false
    });
    setUserSubscription(true);
  }

  render() {
    const { suggestions, queryType, isDarkMode, popularVideos } = this.props;
    const { showBanner } = this.state;
    return (
      <React.Fragment>
        <React.Fragment>
          <Breadcrumb
            isDarkMode={isDarkMode}
            queryType={queryType}
            suggestions={suggestions}
          />
        </React.Fragment>
        <React.Fragment>
          {showBanner && (
            <Banner
              handleCloseBanner={this.handleCloseBanner}
              acceptSubscription={this.acceptSubscription}
            />
          )}
        </React.Fragment>
        <HomeSection showBanner={showBanner} isDarkMode={isDarkMode}>
          <Columns>
            {popularVideos.map((video) => {
              return (
                <CardVideo
                  key={video.videoId}
                  isDarkMode={isDarkMode}
                  video={video}
                  handleClickCard={this.viewDetailsPage}
                />
              );
            })}
          </Columns>
        </HomeSection>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  popularVideos: PropTypes.any,
  history: PropTypes.object,
  userSubscription: PropTypes.bool.isRequired,
  setUserSubscription: PropTypes.func,
  fetchPopularVideos: PropTypes.func,
  suggestions: PropTypes.array,
  queryType: PropTypes.string.isRequired
};

Home.defaultProps = {
  popularVideos: [],
  setUserSubscription: () => {},
  fetchPopularVideos: () => {},
  suggestions: []
};

export default Home;
