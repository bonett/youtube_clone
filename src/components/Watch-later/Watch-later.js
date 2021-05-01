import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { WatchLaterSection } from './Watch-later.styled';

function WatchLater({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <WatchLaterSection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </WatchLaterSection>
  );
}

WatchLater.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

WatchLater.defaultProps = {};

export default WatchLater;
