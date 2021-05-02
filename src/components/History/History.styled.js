import React from 'react';
import styled, { css } from 'styled-components';

export const HistorySection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ isdarkmode }) => css`
    background-color: ${!isdarkmode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

HistorySection.displayName = 'HistorySection';
