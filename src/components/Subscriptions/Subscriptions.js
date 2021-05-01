import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { SubscriptionsSection } from './Subscriptions.styled';

function Subscriptions({ isDarkMode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <SubscriptionsSection isDarkMode={isDarkMode}>
      <CommingSoon isDarkMode={isDarkMode} redirectHome={redirectToHome} />
    </SubscriptionsSection>
  );
}

Subscriptions.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Subscriptions.defaultProps = {};

export default Subscriptions;
