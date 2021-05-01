import React from 'react';
import styled, { css } from 'styled-components';

export const BreadcrumbWrapper = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    border-bottom: 1px solid
      ${!isDarkMode ? theme.border.light : theme.border.dark};
    border-top: 1px solid
      ${!isDarkMode ? theme.border.light : theme.border.dark};
    margin-bottom: 0 !important;
  `}
`;

export const List = styled(({ ...rest }) => <ul {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    padding: 16px;

    span {
      cursor: pointer;
      background-color: ${!isDarkMode
        ? theme.color.light
        : '#313131'} !important;
      color: ${!isDarkMode ? theme.color.text : theme.color.light} !important;
      margin-right: 10px;
      border-radius: 20px;
      font-weight: 600 !important;
      font-size: 0.85em !important;
      padding: 6px 12px !important;
      border: 1px solid ${!isDarkMode ? '#6d6d6d' : '#6d6d6d'} !important ;

      &.is-active {
        background-color: ${isDarkMode
          ? theme.color.light
          : '#313131'} !important;
        height: auto !important;
        color: ${isDarkMode ? theme.color.text : theme.color.light} !important;
        border: 1px solid ${isDarkMode ? theme.color.light : '#6d6d6d'} !important ;
      }
    }
  `}
`;

BreadcrumbWrapper.displayName = 'BreadcrumbWrapper';
List.displayName = 'List';
