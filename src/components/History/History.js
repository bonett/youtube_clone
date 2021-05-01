import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { HistorySection } from './History.styled';
function History({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <HistorySection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </HistorySection>
  );
}

History.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

History.defaultProps = {};

export default History;
