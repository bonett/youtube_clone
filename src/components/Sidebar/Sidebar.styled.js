import React from 'react';
import styled, { css } from 'styled-components';

export const Aside = styled(({ ...rest }) => <aside {...rest} />)`
  ${() => css``}
`;

export const Item = styled(({ ...rest }) => <a {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    align-items: center !important;
    display: flex !important;
    flex-direction: row !important;
    font-size: 1em !important;
    justify-content: flex-start !important;
    padding: 14px 24px !important;
    width: 100% !important;
    color: ${!isDarkMode ? theme.color.text : theme.color.light} !important;

    &:hover {
      background-color: ${!isDarkMode ? '#e8e7e7' : '#3c3c3c'} !important;
      color: ${!isDarkMode ? theme.color.text : '#ffffff'} !important;
    }

    i {
      margin-right: 10px;
      color: ${!isDarkMode ? theme.color.text : theme.color.light} !important;
    }
  `}
`;

Aside.displayName = 'Aside';
Item.displayName = 'Item';
