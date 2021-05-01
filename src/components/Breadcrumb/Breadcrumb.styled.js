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
    padding: 10px 16px;
    list-style: none;

    li+li:before {
      color:  ${!isDarkMode ? theme.color.light : theme.color.dark};
      content: "/\00a0";
    }
  `}
`;

export const Item = styled(({ ...rest }) => <li {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    display: inline;
    font-size: 1em;

    a {
      color: #0275d8;
      text-decoration: none;

      &:hover {
        color: #01447e;
        text-decoration: underline;
      }
    }
  `}
`;

BreadcrumbWrapper.displayName = 'BreadcrumbWrapper';
List.displayName = 'List';
Item.displayName = 'Item';
