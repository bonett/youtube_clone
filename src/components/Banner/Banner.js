import React from 'react';
import PropTypes from 'prop-types';
import {
  BannerSection,
  Wrapper,
  Message,
  Text,
  Logo,
  Close,
  AcceptSubscription
} from './Banner.styled';
import LogoBanner from '../../static/images/logo-banner.png';
function Banner({ handleCloseBanner }) {
  return (
    <BannerSection class="notification">
      <Wrapper>
        <Close className="material-icons" onClick={handleCloseBanner}>
          disabled_by_default
        </Close>
        <Message>
          <Logo src={LogoBanner} />
          <Text>Explore music based on your unique taste</Text>
          <AcceptSubscription>1 month free</AcceptSubscription>
        </Message>
      </Wrapper>
    </BannerSection>
  );
}

Banner.propTypes = {
  handleCloseBanner: PropTypes.func
};

Banner.defaultProps = {
  handleCloseBanner: () => {}
};

export default Banner;
