import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { MoviesSection } from './Movies.styled';

function Movies({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <MoviesSection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </MoviesSection>
  );
}

Movies.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Movies.defaultProps = {};

export default Movies;
