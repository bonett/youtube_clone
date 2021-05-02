import React from 'react';
import styled, { css } from 'styled-components';

export const DetailsWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({ isdarkmode }) => css`
    height: 100vh;
    width: 100%;
    padding: 20px 10px;
    background-color: ${!isdarkmode ? '#f5f5f5' : '#131313'};

    iframe {
      width: 100%;
      height: 520px;
    }
  `}
`;

export const Content = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  `}
`;

export const Video = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    width: 70%;
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `}
`;

export const List = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    background-color: ${!isdarkmode ? '#f5f5f5' : '#131313'};
    width: 30%;
    min-height: 800px;
    max-height: 800px;
    height: 800px;
    overflow: hidden;
    padding: 20px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;

    h4 {
      font-size: 1.2em;
      font-weight: 400;
      color: ${!isdarkmode ? theme.color.text : theme.color.light};
    }

    .list {
      overflow-y: scroll;
      border: 1px solid ${!isdarkmode ? '#dedede' : '#3a3a3a'};
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  `}
`;

export const Name = styled(({ ...rest }) => <h2 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    width: 100%;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    height: 60px;
    align-items: center;
    font-size: 1.4em;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;

    &:hover {
      color: #0085ff;
    }
  `}
`;

export const Description = styled(({ ...rest }) => <p {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    width: 100%;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    align-items: center;
    font-size: 1em;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `}
`;

export const Publisher = styled(({ ...rest }) => <h5 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    width: 100%;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    align-items: center;
    margin-top: 20px;
    font-size: 0.9em;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    &:hover {
      color: #0085ff;
    }
  `}
`;

export const DatePublished = styled(({ ...rest }) => <h5 {...rest} />)`
  ${({ theme, isdarkmode }) => css`
    width: 100%;
    color: ${!isdarkmode ? theme.color.text : theme.color.light};
    align-items: center;
    margin-top: 10px;
    font-size: 0.9em;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `}
`;

DetailsWrapper.displayName = 'DetailsWrapper';
Content.displayName = 'Content';
Video.displayName = 'Video';
List.displayName = 'List';
Name.displayName = 'Name';
Description.displayName = 'Description';
Publisher.displayName = 'Publisher';
DatePublished.displayName = 'DatePublished';
