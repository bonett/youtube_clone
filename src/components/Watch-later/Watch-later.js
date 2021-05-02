import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { WatchLaterSection } from './Watch-later.styled';

function WatchLater({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <WatchLaterSection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </WatchLaterSection>
  );
}

WatchLater.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

WatchLater.defaultProps = {};

export default WatchLater;
