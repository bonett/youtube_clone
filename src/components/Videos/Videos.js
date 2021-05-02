import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { VideosSection } from './Videos.styled';

function Videos({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <VideosSection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </VideosSection>
  );
}

Videos.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Videos.defaultProps = {};

export default Videos;
