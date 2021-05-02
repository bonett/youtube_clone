import React from 'react';
import styled, { css } from 'styled-components';

export const HomeSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ showBanner, isdarkmode }) => css`
    background-color: ${!isdarkmode ? '#f5f5f5' : '#131313'};
    padding: 20px;
    height: ${showBanner ? 'calc(81vh - 200px)' : 'calc(100vh - 140px)'};
    min-height: ${showBanner ? 'calc(81vh - 200px)' : 'calc(100vh - 140px)'};
    max-height: ${showBanner ? 'calc(81vh - 200px)' : 'calc(100vh - 140px)'};
    overflow-y: scroll;
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
