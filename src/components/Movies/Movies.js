import React from 'react';
import PropTypes from 'prop-types';
import { MoviesSection } from './Movies.styled';

function Movies({ isDarkMode }) {
  return <MoviesSection isDarkMode={isDarkMode}>asjk</MoviesSection>;
}

Movies.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Movies.defaultProps = {};

export default Movies;
