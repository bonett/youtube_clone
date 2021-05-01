import React from 'react';
import PropTypes from 'prop-types';
import { WatchLaterSection } from './Watch-later.styled';

function WatchLater({ isDarkMode }) {
  return <WatchLaterSection isDarkMode={isDarkMode}>asjk</WatchLaterSection>;
}

WatchLater.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

WatchLater.defaultProps = {};

export default WatchLater;
