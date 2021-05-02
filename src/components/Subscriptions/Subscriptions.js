import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { SubscriptionsSection } from './Subscriptions.styled';

function Subscriptions({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <SubscriptionsSection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </SubscriptionsSection>
  );
}

Subscriptions.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Subscriptions.defaultProps = {};

export default Subscriptions;
