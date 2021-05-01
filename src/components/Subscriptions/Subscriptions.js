import React from 'react';
import PropTypes from 'prop-types';
import { SubscriptionsSection } from './Subscriptions.styled';

function Subscriptions({ isDarkMode }) {
  return (
    <SubscriptionsSection isDarkMode={isDarkMode}>asjk</SubscriptionsSection>
  );
}

Subscriptions.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Subscriptions.defaultProps = {};

export default Subscriptions;
