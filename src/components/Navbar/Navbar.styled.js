import React from 'react';
import styled, { css } from 'styled-components';

export const NavigationBar = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
    border-bottom: 1px solid
      ${!isDarkMode ? theme.border.light : theme.border.dark};
    padding-left: 1em;
    padding-top: 0.4em;
    padding-bottom: 0.4em;

    .buttons {
      a {
        margin: 0 14px;
      }
    }
    .navbar-item {
      a {
        i {
          color: ${!isDarkMode ? theme.color.text : theme.color.light};
          font-size: 1.6em;
        }

        &.photo {
          padding-left: 0;
        }
      }
    }

    .navbar-dropdown {
      background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
      border-top: none;
      hr {
        border-color: ${!isDarkMode ? theme.border.light : theme.border.dark};
      }

      a {
        color: ${!isDarkMode ? theme.color.text : theme.color.light};
        margin: 2px 0;
        padding: 6px 30px;

        i {
          color: ${!isDarkMode ? theme.color.text : theme.color.light};
          font-size: 1.6em;
          margin-right: 10px !important;
        }

        & > div {
          margin-left: 10px;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .navbar-dropdown a.navbar-item:focus,
      .navbar-dropdown a.navbar-item:hover {
        background-color: ${!isDarkMode ? '#e8e7e7' : '#444444'};
        color: ${!isDarkMode ? theme.color.text : theme.color.light};
      }
    }
  `}
`;

export const UserPhoto = styled(({ ...rest }) => <img {...rest} />)`
  ${() => css`
    border-radius: 50%;
    max-height: 2.2rem !important;
    margin-top: -6px;
  `}
`;

NavigationBar.displayName = 'NavigationBar';
UserPhoto.displayName = 'UserPhoto';
