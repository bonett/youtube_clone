import React from 'react';
import PropTypes from 'prop-types';
import CardVideo from '../Card';
import { HomeSection, Columns } from './Home.styled';
import Banner from '../../components/Banner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: false };
    this.handleCloseBanner = this.handleCloseBanner.bind(this);
    this.viewDetailsPage = this.viewDetailsPage.bind(this);
    this.acceptSubscription = this.acceptSubscription.bind(this);
  }

  componentDidMount = () => {
    const { fetchPopularVideos } = this.props;
    const payload = {
      query: 'all'
    };

    fetchPopularVideos(payload);
  };

  componentWillReceiveProps(prevProps) {
    const { userSubscription } = this.props;
    if (prevProps.userSubscription !== userSubscription) {
      this.setState({
        showBanner: true
      });
    }
  }

  viewDetailsPage(id) {
    const { history } = this.props;
    history.push(`/watch/${id}`);
  }

  handleCloseBanner() {
    this.setState({
      showBanner: true
    });
  }

  acceptSubscription() {
    const { setUserSubscription } = this.props;
    this.setState({
      showBanner: true
    });
    setUserSubscription(true);
  }

  render() {
    const { isDarkMode, popularVideos, userSubscription } = this.props;

    return (
      <React.Fragment>
        <Banner
          showBanner={userSubscription}
          handleCloseBanner={this.handleCloseBanner}
          acceptSubscription={this.acceptSubscription}
        />
        <HomeSection isDarkMode={isDarkMode}>
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
  fetchPopularVideos: PropTypes.func
};

Home.defaultProps = {
  popularVideos: [],
  setUserSubscription: () => {},
  fetchPopularVideos: () => {}
};

export default Home;
