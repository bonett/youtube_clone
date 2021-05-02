import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Switch, Slide, Round } from './Toggle.styled';

function Toggle({ isdarkmode, onChangeToggle }) {
  return (
    <Wrapper isdarkmode={isdarkmode}>
      <Switch>
        <Slide
          type="checkbox"
          defaultChecked={isdarkmode}
          onChange={onChangeToggle}
        />
        <Round className="slider circle"></Round>
      </Switch>
    </Wrapper>
  );
}

Toggle.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  onChangeToggle: PropTypes.func
};

Toggle.defaultProps = {
  onChangeToggle: () => {}
};

export default Toggle;
