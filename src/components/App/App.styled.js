import React from 'react';
import styled, { css } from 'styled-components';

export const AppContainer = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
  `}
`;

export const Main = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    display: flex;
    flex-direction: row;
    width: 100%;
  `}
`;

export const Aside = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 200px;

    @media screen and (max-width: 992px) {
      width: 70px !important;
    }

    @media screen and (max-width: 568px) {
      transform: translateX(-200px);
      width: 0 !important;
    }
  `}
`;

export const Wrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 87%;
    padding: 0;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `}
`;

AppContainer.displayName = 'AppContainer';
Main.displayName = 'Main';
Aside.displayName = 'Aside';
Wrapper.displayName = 'Wrapper';
