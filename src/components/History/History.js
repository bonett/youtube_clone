import React from 'react';
import PropTypes from 'prop-types';
import { HistorySection } from './History.styled';

function History({ isDarkMode }) {
  return <HistorySection isDarkMode={isDarkMode}>asjk</HistorySection>;
}

History.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

History.defaultProps = {};

export default History;
