import React from 'react';
import PropTypes from 'prop-types';
import { VideosSection } from './Videos.styled';

function Videos({ isDarkMode }) {
  return <VideosSection isDarkMode={isDarkMode}>asjk</VideosSection>;
}

Videos.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Videos.defaultProps = {};

export default Videos;
