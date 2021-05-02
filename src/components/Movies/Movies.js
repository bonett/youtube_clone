import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { MoviesSection } from './Movies.styled';

function Movies({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <MoviesSection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </MoviesSection>
  );
}

Movies.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Movies.defaultProps = {};

export default Movies;
