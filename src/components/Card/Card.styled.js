import React from 'react';
import styled, { css } from 'styled-components';

export const Card = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    margin: 4px;
    width: 100%;
    box-shadow: ${!isDarkMode ? theme.boxShadow.light : theme.boxShadow.dark};
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;

    &.recommended {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      margin: 0;
      box-shadow: none;
    }
  `}
`;

export const Cover = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    width: 100% !important;

    &.cover {
      padding: 4px;
    }

    img,
    iframe {
      height: auto !important;
      width: 100% !important;
    }
  `}
`;

export const Info = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : '#131313'};
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
        font-size: 0.9em;
      }

      h6 {
        font-size: 0.9em;
      }
    }
  `}
`;

export const Title = styled(({ ...rest }) => <h4 {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    color: ${!isDarkMode ? theme.color.text : theme.color.light};
    font-weight: 800;
  `}
`;

export const Details = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? theme.color.light : '#131313'};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
  `}
`;
export const ChannelTitle = styled(({ ...rest }) => <h6 {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    color: ${!isDarkMode ? theme.color.text : theme.color.light};
    font-weight: 400;
    font-size: 0.9em;
    margin-bottom: 10px;

    span {
      font-size: 0.9em;
      color: ${!isDarkMode ? theme.color.text : theme.color.light};
    }
  `}
`;

export const DateSince = styled(({ ...rest }) => <h6 {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    color: ${!isDarkMode ? theme.color.text : theme.color.light};
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
