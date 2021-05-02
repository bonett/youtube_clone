import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { HistorySection } from './History.styled';
function History({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <HistorySection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </HistorySection>
  );
}

History.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

History.defaultProps = {};

export default History;
