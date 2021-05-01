import React from 'react';
import styled, { css } from 'styled-components';

export const NavigationBar = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
    padding-left: 1em;
    padding-top: 0.4em;
    padding-bottom: 0.4em;

    .btn-burger {
      cursor: pointer;
      margin-top: 14px;
      margin-left: 10px;
      margin-right: 10px;
      color: ${!isDarkMode ? theme.color.text : theme.color.light};
    }

    a.navbar-item:focus,
    a.navbar-item:focus-within,
    a.navbar-item.is-active,
    .navbar-link:focus,
    .navbar-link:focus-within,
    .navbar-link.is-active {
      background-color: ${!isDarkMode
        ? theme.color.light
        : theme.color.dark} !important;
    }

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
      }
    }

    .photo {
      padding: 4px 14px;
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
        padding: 6px 22px;

        i {
          color: ${!isDarkMode ? theme.color.text : theme.color.light};
          font-size: 1.6em;
          margin-right: 10px !important;
        }

        & > div {
          margin-left: 40px;
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

export const Profile = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  `}
`;

export const Photo = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
  `}
`;

export const Info = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
  `}
`;

export const Name = styled(({ ...rest }) => <h4 {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    color: ${!isDarkMode ? theme.color.text : theme.color.light};
    font-weight: 700 !important;
    text-transform: captalize !important;
  `}
`;

export const Email = styled(({ ...rest }) => <h5 {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    color: ${!isDarkMode ? theme.color.text : theme.color.light};
    font-weight: 700 !important;
    text-transform: captalize !important;
  `}
`;

export const ManageAccount = styled(({ ...rest }) => <a {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.blue} !important;
    padding: 0 !important;
    font-size: 0.8em !important;
    font-weight: 500 !important;
  `}
`;

NavigationBar.displayName = 'NavigationBar';
UserPhoto.displayName = 'UserPhoto';
Profile.displayName = 'Profile';
Photo.displayName = 'Photo';
Info.displayName = 'Info';
Name.displayName = 'Name';
Email.displayName = 'Email';
ManageAccount.displayName = 'ManageAccount';
