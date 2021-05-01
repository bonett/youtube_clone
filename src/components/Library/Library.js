import React from 'react';
import PropTypes from 'prop-types';
import { LibrarySection } from './Library.styled';

function Library({ isDarkMode }) {
  return <LibrarySection isDarkMode={isDarkMode}>asjk</LibrarySection>;
}

Library.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Library.defaultProps = {};

export default Library;
