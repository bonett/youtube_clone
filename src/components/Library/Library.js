import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { LibrarySection } from './Library.styled';

function Library({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <LibrarySection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </LibrarySection>
  );
}

Library.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Library.defaultProps = {};

export default Library;
