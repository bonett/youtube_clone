import React from 'react';
import styled, { css } from 'styled-components';

export const AppContainer = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
  `}
`;

AppContainer.displayName = 'AppContainer';
