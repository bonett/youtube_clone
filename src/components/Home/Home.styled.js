import React from 'react';
import styled, { css } from 'styled-components';

export const HomeSection = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    background-color: ${!isDarkMode ? '#f5f5f5' : '#131313'};
    padding: 20px;
  `}
`;

export const Columns = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    width: 100%;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 567px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const Card = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isDarkMode }) => css`
    margin: 4px;
    width: 100%;
    box-shadow: ${!isDarkMode
      ? '0 1px 3px rgba(0, 0, 0, 0.1)'
      : '0 1px 3px rgb(245 245 245 / 10%)'};
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  `}
`;

export const Cover = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    width: 100% !important;

    img {
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

HomeSection.displayName = 'HomeSection';
Columns.displayName = 'Columns';
Card.displayName = 'Card';
Cover.displayName = 'Cover';
Info.displayName = 'Info';
Title.displayName = 'Title';
Details.displayName = 'Details';
ChannelTitle.displayName = 'ChannelTitle';
DateSince.displayName = 'DateSince';
