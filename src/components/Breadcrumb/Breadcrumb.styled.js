import React from 'react';
import styled, { css } from 'styled-components';

export const BreadcrumbWrapper = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
  `}
`;

BreadcrumbWrapper.displayName = 'BreadcrumbWrapper';
