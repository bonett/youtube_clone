import React from 'react';
import styled, { css } from 'styled-components';

export const MoviesSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

MoviesSection.displayName = 'MoviesSection';
