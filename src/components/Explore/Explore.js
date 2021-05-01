import React from 'react';
import PropTypes from 'prop-types';
import { ExploreSection } from './Explore.styled';
function Explore({ isDarkMode }) {
  return <ExploreSection isDarkMode={isDarkMode}>asjk</ExploreSection>;
}

Explore.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Explore.defaultProps = {};

export default Explore;
