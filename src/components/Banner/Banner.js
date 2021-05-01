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
function Banner({ handleCloseBanner, acceptSubscription }) {
  return (
    <BannerSection className="notification">
      <Wrapper>
        <Close className="material-icons" onClick={handleCloseBanner}>
          disabled_by_default
        </Close>
        <Message>
          <Logo src={LogoBanner} />
          <Text>Explore music based on your unique taste</Text>
          <AcceptSubscription type="button" onClick={acceptSubscription}>
            1 month free
          </AcceptSubscription>
        </Message>
      </Wrapper>
    </BannerSection>
  );
}

Banner.propTypes = {
  handleCloseBanner: PropTypes.func,
  acceptSubscription: PropTypes.func
};

Banner.defaultProps = {
  handleCloseBanner: () => {},
  acceptSubscription: () => {}
};

export default Banner;
