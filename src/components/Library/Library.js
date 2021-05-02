import React from 'react';
import PropTypes from 'prop-types';
import CommingSoon from '../Cooming-soon/Comming-soon';
import { LibrarySection } from './Library.styled';

function Library({ isdarkmode, history }) {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <LibrarySection isdarkmode={isdarkmode}>
      <CommingSoon isdarkmode={isdarkmode} redirectHome={redirectToHome} />
    </LibrarySection>
  );
}

Library.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  history: PropTypes.object
};

Library.defaultProps = {};

export default Library;
