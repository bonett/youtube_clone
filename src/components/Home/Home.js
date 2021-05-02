import React from 'react';
import PropTypes from 'prop-types';
import CardVideo from '../Card';
import { HomeSection, Columns } from './Home.styled';
import Banner from '../../components/Banner';
import Loader from '../../components/Loader';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBanner: true };
    this.handleCloseBanner = this.handleCloseBanner.bind(this);
    this.viewDetailsPage = this.viewDetailsPage.bind(this);
    this.acceptSubscription = this.acceptSubscription.bind(this);
  }

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
    const { setUserSubscription } = this.props;
    this.setState({
      showBanner: false
    });
    setUserSubscription(false);
  }

  acceptSubscription() {
    const { setUserSubscription } = this.props;
    this.setState({
      showBanner: false
    });
    setUserSubscription(true);
  }

  render() {
    const {
      isdarkmode,
      popularVideos,
      isloading,
      userSubscription
    } = this.props;
    const { showBanner } = this.state;
    const show = showBanner && !userSubscription;

    return (
      <React.Fragment>
        <Banner
          showBanner={show}
          handleCloseBanner={this.handleCloseBanner}
          acceptSubscription={this.acceptSubscription}
        />
        <HomeSection isdarkmode={isdarkmode}>
          <React.Fragment>
            {!isloading && popularVideos.length > 0 ? (
              <Columns>
                {popularVideos.map((video) => {
                  return (
                    <CardVideo
                      key={video.videoId}
                      isdarkmode={isdarkmode}
                      video={video}
                      handleClickCard={this.viewDetailsPage}
                    />
                  );
                })}
              </Columns>
            ) : (
              <Loader />
            )}
          </React.Fragment>
        </HomeSection>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  popularVideos: PropTypes.any,
  history: PropTypes.object,
  userSubscription: PropTypes.bool.isRequired,
  setUserSubscription: PropTypes.func,
  isloading: PropTypes.bool.isRequired
};

Home.defaultProps = {
  popularVideos: [],
  setUserSubscription: () => {}
};

export default Home;
