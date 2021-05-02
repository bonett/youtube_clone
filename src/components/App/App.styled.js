import React from 'react';
import styled, { css } from 'styled-components';

export const AppContainer = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
  `}
`;

export const Content = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    display: flex;
    flex-direction: row;
    width: 100%;
  `}
`;

export const Aside = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    transition: 0.5s;
    padding-top: 60px;
  `}
`;

export const Wrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    &#main {
      transition: margin-left 0.5s;
    }
  `}
`;

AppContainer.displayName = 'AppContainer';
Content.displayName = 'Content';
Aside.displayName = 'Aside';
Wrapper.displayName = 'Wrapper';
