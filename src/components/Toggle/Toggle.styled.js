import React from 'react';
import styled, { css } from 'styled-components';

export const Wrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    padding: 12px 0;

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${!isDarkMode ? theme.color.gray : '#3e3e3e'};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 2px;
      bottom: 1px;
      background-color: ${theme.color.light};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: ${!isDarkMode ? theme.color.dark : ''};
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.circle {
      border-radius: 34px;
    }

    .slider.circle:before {
      border-radius: 50%;
      background-color: ${!isDarkMode
        ? theme.color.yellow
        : theme.color.purple};
    }
  `}
`;

export const Switch = styled(({ ...rest }) => <label {...rest} />)`
  ${() => css`
    position: relative;
    display: inline-block;
    width: 56px;
    height: 28px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  `}
`;

export const Slide = styled(({ ...rest }) => <input {...rest} />)`
  ${() => css`
    opacity: 0;
    width: 0;
    height: 0;
  `}
`;

export const Round = styled(({ ...rest }) => <span {...rest} />)`
  ${() => css`
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  `}
`;

Wrapper.displayName = 'Wrapper';
Switch.displayName = 'Switch';
Slide.displayName = 'Slide';
Round.displayName = 'Round';
