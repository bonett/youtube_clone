import React from 'react';
import PropTypes from 'prop-types';
import {
  CommingSoonWrapper,
  Wrapper,
  Icon,
  Text,
  Button
} from './Comming-soon.styled';

function CommingSoon({ isDarkMode, redirectHome }) {
  return (
    <CommingSoonWrapper isDarkMode={isDarkMode}>
      <Wrapper>
        <Icon isDarkMode={isDarkMode} className="material-icons">
          wifi_off
        </Icon>
        <Text isDarkMode={isDarkMode}>Section not available</Text>
        <Button isDarkMode={isDarkMode} type="button" onClick={redirectHome}>
          {' '}
          Back to Home
        </Button>
      </Wrapper>
    </CommingSoonWrapper>
  );
}

CommingSoon.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  redirectHome: PropTypes.func
};

CommingSoon.defaultProps = {
  redirectHome: () => {}
};

export default CommingSoon;
