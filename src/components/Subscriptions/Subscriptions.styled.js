import React from 'react';
import styled, { css } from 'styled-components';

export const SubscriptionsSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ isDarkMode }) => css`
    background-color: ${!isDarkMode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

SubscriptionsSection.displayName = 'SubscriptionsSection';
