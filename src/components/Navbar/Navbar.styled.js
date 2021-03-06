import React from 'react';
import styled, { css } from 'styled-components';

export const NavigationBar = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    background-color: ${!isdarkmode ? theme.color.light : theme.color.dark};
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

export const Span = styled(({ ...rest }) => <span {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
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
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    font-weight: 700 !important;
    text-transform: captalize !important;
  `}
`;

export const Email = styled(({ ...rest }) => <h5 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
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
  ${({ theme, isdarkmode }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .btn-burger {
      cursor: pointer;
      margin-right: 10px;
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }

    a.navbar-item:focus,
    a.navbar-item:focus-within,
    a.navbar-item:hover,
    a.navbar-item.is-active,
    .navbar-link:focus,
    .navbar-link:focus-within,
    .navbar-link:hover,
    .navbar-link.is-active {
      background-color: ${!isdarkmode
        ? theme.color.light
        : theme.color.dark} !important;
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
  ${({ theme, isdarkmode }) => css`
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
      width: 96%;
      background-color: ${!isdarkmode
        ? theme.color.light
        : theme.color.dark} !important;
      border: 1px solid ${!isdarkmode ? '#dedede' : '#3a3a3a'};
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
      padding: 0 16px;

      .icon {
        color: ${!isdarkmode ? theme.color.text : theme.color.light} !important;
        cursor: pointer;
      }
    }

    span {
      margin-left: 0px;
    }

    input::-webkit-input-placeholder {
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }

    input:-ms-input-placeholder {
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }

    input::placeholder {
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }

    .field:not(:last-child) {
      margin-bottom: 0 !important;
    }

    .input:focus,
    .textarea:focus,
    .select select:focus,
    .is-focused.input,
    .is-focused.textarea,
    .select select.is-focused,
    .input:active,
    .textarea:active,
    .select select:active,
    .is-active.input,
    .is-active.textarea,
    .select select.is-active {
      border: 1px solid ${!isdarkmode ? '#dedede' : '#3a3a3a'} !important;
      box-shadow: 0 0 0 0.125em rgb(50 115 220 / 25%);
    }

    .control.has-icons-right .icon.is-right {
      background-color: ${!isdarkmode
        ? theme.color.light
        : theme.color.dark} !important;
      cursor: pointer;
      top: 11px;
      right: 18px;
      height: 30px;
      width: 30px;
      border-radius: 0 4px 4px 0;
    }

    @media screen and (max-width: 767px) {
      width: 50%;

      span {
        margin-left: 14px;
      }

      .control.has-icons-right .icon.is-right {
        right: 4px;
      }

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
  ${({ theme, isdarkmode }) => css`
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
        color: ${!isdarkmode ? theme.color.text : theme.color.light};
        font-size: 1.6em;
      }
    }

    a.navbar-item:focus,
    a.navbar-item:focus-within,
    a.navbar-item.is-active,
    .navbar-link:focus,
    .navbar-link:focus-within,
    .navbar-link.is-active {
      background-color: ${!isdarkmode
        ? theme.color.light
        : theme.color.dark} !important;
    }

    .navbar-dropdown {
      background-color: ${!isdarkmode ? theme.color.light : theme.color.dark};
      border-top: none;

      hr {
        border-color: ${!isdarkmode ? '#dedede' : '#3a3a3a'};
        height: 1px !important;
      }

      a {
        color: ${!isdarkmode ? theme.color.text : theme.color.light} !important;
        margin: 2px 0;
        padding: 6px 22px;

        i {
          color: ${!isdarkmode ? theme.color.text : theme.color.light};
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
        background-color: ${!isdarkmode ? '#e8e7e7' : '#444444'};
        color: ${!isdarkmode ? theme.color.text : theme.color.light};
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
Span.displayName = 'Span';
