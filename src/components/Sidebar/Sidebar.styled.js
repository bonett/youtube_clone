import React from 'react';
import styled, { css } from 'styled-components';

export const Aside = styled(({ ...rest }) => <aside {...rest} />)`
  ${({ isdarkmode }) => css`
    position: absolute;
    z-index: 999;
    margin-top: 15px;
    transition: margin-left 0.1s;

    .hidden-mobile {
      display: block;
    }

    hr {
      border-color: ${!isdarkmode ? '#dedede' : '#3a3a3a'};
      height: 1px !important;
    }

    @media screen and (max-width: 992px) {
      .hidden-mobile {
        display: none;
      }
    }
  `}
`;

export const Item = styled(({ ...rest }) => <a {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    align-items: center !important;
    display: flex !important;
    flex-direction: row !important;
    font-size: 0.9em !important;
    font-weight: 400 !important;
    justify-content: flex-start !important;
    padding: 14px 24px !important;
    width: 100% !important;
    color: ${!isdarkmode ? theme.color.text : theme.color.light} !important;

    &.is-active {
      background-color: ${!isdarkmode ? '#e8e7e7' : '#3c3c3c'} !important;
    }

    &:hover {
      background-color: ${!isdarkmode ? '#e8e7e7' : '#3c3c3c'} !important;
      color: ${!isdarkmode ? theme.color.text : '#ffffff'} !important;
    }

    i {
      margin-right: 10px;
      font-size: 1.6em !important;
      color: ${!isdarkmode ? theme.color.text : theme.color.light} !important;
    }

    @media screen and (max-width: 992px) {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      font-size: 0.6em !important;
      font-weight: 400 !important;

      i {
        margin-right: 0 !important;
        font-size: 2em !important;
      }
    }
  `}
`;

Aside.displayName = 'Aside';
Item.displayName = 'Item';
