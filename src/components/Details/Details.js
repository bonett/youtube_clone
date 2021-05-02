import React from 'react';
import PropTypes from 'prop-types';
import { CommingSoonWrapper, Wrapper, Icon } from './Details.styled';

function Details({ isDarkMode }) {
  return (
    <CommingSoonWrapper isDarkMode={isDarkMode}>
      <Wrapper>
        <Icon isDarkMode={isDarkMode} className="material-icons">
          wifi_off
        </Icon>
      </Wrapper>
    </CommingSoonWrapper>
  );
}

Details.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Details.defaultProps = {
  redirectHome: () => {}
};

export default Details;
