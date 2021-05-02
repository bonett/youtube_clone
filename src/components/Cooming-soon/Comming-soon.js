import React from 'react';
import PropTypes from 'prop-types';
import {
  CommingSoonWrapper,
  Wrapper,
  Icon,
  Text,
  Button
} from './Comming-soon.styled';

function CommingSoon({ isdarkmode, redirectHome }) {
  return (
    <CommingSoonWrapper isdarkmode={isdarkmode}>
      <Wrapper>
        <Icon isdarkmode={isdarkmode} className="material-icons">
          wifi_off
        </Icon>
        <Text isdarkmode={isdarkmode}>Section not available</Text>
        <Button isdarkmode={isdarkmode} type="button" onClick={redirectHome}>
          {' '}
          Back to Home
        </Button>
      </Wrapper>
    </CommingSoonWrapper>
  );
}

CommingSoon.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  redirectHome: PropTypes.func
};

CommingSoon.defaultProps = {
  redirectHome: () => {}
};

export default CommingSoon;
