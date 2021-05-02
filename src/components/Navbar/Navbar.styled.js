import React from 'react';
import styled, { css } from 'styled-components';

export const NavigationBar = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
    padding: 0.6em 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const Brand = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .btn-burger {
      cursor: pointer;
      margin-right: 10px;
      color: ${!isDarkMode ? theme.color.text : theme.color.light};
    }

    @media screen and (max-width: 1023px) {
      img {
        width: 68px;
      }
    }

    @media screen and (max-width: 475px) {
      img {
        width: 48px;
        margin-right: 0;
      }
    }
  `}
`;

export const Search = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 2em;
    width: 70%;

    div:first-child {
      width: 60%;
    }

    input {
      height: 32px;
      margin: 10px;
      width: 100%;
      background-color: ${!isDarkMode
        ? theme.color.light
        : theme.color.dark} !important;
      border: 1px solid ${!isDarkMode ? '#dedede' : '#3a3a3a'};
      color: ${!isDarkMode ? theme.color.text : theme.color.light};
      padding: 0 16px;
    }

    @media screen and (max-width: 767px) {
      width: 50%;

      div:first-child {
        width: 50%;
      }
    }

    @media screen and (max-width: 648px) {
      width: 30%;
      padding: 0 2em 0 0;

      div:first-child {
        width: 100%;
      }
    }

    @media screen and (max-width: 475px) {
      width: 24%;

      div:first-child {
        width: 100%;
      }
    }
  `}
`;

export const Menu = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 8px;

    .photo {
      padding: 8px 14px 4px 14px;
    }

    a {
      margin: 0 14px;

      i {
        color: ${!isDarkMode ? theme.color.text : theme.color.light};
        font-size: 1.6em;
      }
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

    .navbar-dropdown {
      background-color: ${!isDarkMode ? theme.color.light : theme.color.dark};
      border-top: none;

      hr {
        border-color: ${!isDarkMode ? '#dedede' : '#3a3a3a'};
        height: 1px !important;
      }

      a {
        color: ${!isDarkMode ? theme.color.text : theme.color.light} !important;
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

    @media screen and (max-width: 1023px) {
      a {
        margin: 0 6px;
      }

      .navbar-dropdown {
        display: none;
        z-index: 99999;
        position: absolute;
        right: 48px;
      }
    }

    @media screen and (max-width: 475px) {
      a {
        margin: 0 2px;

        i {
          font-size: 1.2em;
        }
      }
    }
  `}
`;

NavigationBar.displayName = 'NavigationBar';
UserPhoto.displayName = 'UserPhoto';
Profile.displayName = 'Profile';
Photo.displayName = 'Photo';
Info.displayName = 'Info';
Name.displayName = 'Name';
Email.displayName = 'Email';
Search.displayName = 'Search';
Brand.displayName = 'Brand';
Menu.displayName = 'Menu';
ManageAccount.displayName = 'ManageAccount';
