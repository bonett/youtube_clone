import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { VideosSection } from './Videos.styled';

function Videos({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <VideosSection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </VideosSection>
  );
}

Videos.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Videos.defaultProps = {};

export default Videos;
