import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Switch, Slide, Round } from './Toggle.styled';

function Toggle({ isDarkMode, onChangeToggle }) {
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Switch>
        <Slide
          type="checkbox"
          defaultChecked={isDarkMode}
          onChange={onChangeToggle}
        />
        <Round className="slider circle"></Round>
      </Switch>
    </Wrapper>
  );
}

Toggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func
};

Toggle.defaultProps = {
  onChangeToggle: () => {}
};

export default Toggle;
