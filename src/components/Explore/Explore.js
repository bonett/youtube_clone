import React from 'react';
import PropTypes from 'prop-types';
import { ExploreSection } from './Explore.styled';
import CommingSoon from '../Cooming-soon/Comming-soon';
function Explore({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <ExploreSection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </ExploreSection>
  );
}

Explore.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Explore.defaultProps = {};

export default Explore;
