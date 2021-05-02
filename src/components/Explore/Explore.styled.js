import React from 'react';
import styled, { css } from 'styled-components';

export const ExploreSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ isdarkmode }) => css`
    background-color: ${!isdarkmode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

ExploreSection.displayName = 'ExploreSection';
