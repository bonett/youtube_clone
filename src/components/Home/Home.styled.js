import React from 'react';
import styled, { css } from 'styled-components';

export const HomeSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

export const Columns = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    width: 100%;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 567px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

HomeSection.displayName = 'HomeSection';
Columns.displayName = 'Columns';
