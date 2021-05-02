import React from 'react';
import styled, { css } from 'styled-components';

export const LoaderWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;

    img {
      width: 40px;
      margin-top: -100px;
    }
  `}
`;

LoaderWrapper.displayName = 'LoaderWrapper';
