import React from 'react';
import styled, { css } from 'styled-components';

export const CommingSoonWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    height: 100vh;
    width: 100%;
  `}
`;

export const Wrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  `}
`;

export const Icon = styled(({ ...rest }) => <span {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    font-size: 6em;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
  `}
`;

export const Text = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    font-size: 2.3em;
    text-transform: uppercase;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
  `}
`;

export const Button = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    background: transparent !important;
    border: 1px solid ${!isdarkmode ? theme.color.text : theme.color.light};
    padding: 10px 14px;
    width: 150px;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    text-transform: uppercase;
    cursor: pointer;
    margin: 20px 0 0 0;
  `}
`;

CommingSoonWrapper.displayName = 'CommingSoonWrapper';
Wrapper.displayName = 'Wrapper';
Icon.displayName = 'Icon';
Text.displayName = 'Text';
Button.displayName = 'Button';
