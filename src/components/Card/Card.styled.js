import React from 'react';
import styled, { css } from 'styled-components';

export const Card = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    margin: 4px;
    width: 100%;
    box-shadow: ${!isdarkmode ? theme.boxShadow.light : theme.boxShadow.dark};
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    cursor: pointer;

    &:hover {
      background-color: ${isdarkmode ? '#2f2f2f' : '#e0e0e0'} !important;
    }

    &.recommended {
      cursor: pointer;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 8px;
      background-color: ${!isdarkmode ? '#fff' : '#1f1f1f'};
      box-shadow: none;
      border-bottom: 1px solid ${!isdarkmode ? '#dedede' : '#3a3a3a'};

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: ${isdarkmode ? '#2f2f2f' : '#e0e0e0'} !important;
      }
    }
  `}
`;

export const Cover = styled(({ ...rest }) => <div {...rest} />)`
  ${({ isdarkmode }) => css`
    width: 100% !important;
    background-color: ${!isdarkmode ? '#fff' : '#131313'};

    &.cover {
      padding: 0;
    }

    img,
    iframe {
      height: auto !important;
      width: 100% !important;
    }
  `}
`;

export const Info = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    padding: 14px;
    width: 100%;
    height: 180px;
    min-height: 180px;

    &.info-recommended {
      padding: 8px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: flex-start;

      h4 {
        font-size: 0.8em;
      }

      h6 {
        font-size: 0.7em;
      }

      @media (max-width: 991px) {
        h4 {
          font-size: 1.2em;
        }

        h6 {
          font-size: 1em;
        }
      }
    }
  `}
`;

export const Title = styled(({ ...rest }) => <h4 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    font-weight: 800;
  `}
`;

export const Details = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  `}
`;
export const ChannelTitle = styled(({ ...rest }) => <h6 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    font-weight: 400;
    font-size: 0.9em;
    margin-bottom: 10px;

    span {
      font-size: 0.9em;
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }
  `}
`;

export const DateSince = styled(({ ...rest }) => <h6 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    font-weight: 400;
    font-size: 0.9em;
  `}
`;

Card.displayName = 'Card';
Cover.displayName = 'Cover';
Info.displayName = 'Info';
Title.displayName = 'Title';
Details.displayName = 'Details';
ChannelTitle.displayName = 'ChannelTitle';
DateSince.displayName = 'DateSince';
