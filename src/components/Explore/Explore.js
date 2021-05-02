import React from 'react';
import PropTypes from 'prop-types';
import { ExploreSection } from './Explore.styled';
import CommingSoon from '../Cooming-soon/Comming-soon';
function Explore({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <ExploreSection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </ExploreSection>
  );
}

Explore.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Explore.defaultProps = {};

export default Explore;
