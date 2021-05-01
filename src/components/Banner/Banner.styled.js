import React from 'react';
import styled, { css } from 'styled-components';
import bannerImg from '../../static/images/banner.jpeg';

export const BannerSection = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    background-image: url(${bannerImg});
    height: 230px;
    width: 100%;
    background-size: cover;
    background-position-y: -350px;
    position: relative;
    z-index: 2;
    padding: 30px;

    &:after {
      content: '';
      position: absolute;
      z-index: 4;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: radial-gradient(
        circle,
        rgba(0, 21, 25, 0) 0%,
        rgba(1, 10, 11, 1) 49%
      );
    }
  `}
`;

export const Wrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    position: relative;
    z-index: 9;
    height: 20vh;
  `}
`;

export const Message = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    align-items: flex-start !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    width: 100%;

    img {
      width: 140px;
    }
  `}
`;

export const Logo = styled(({ ...rest }) => <img {...rest} />)`
  ${() => css`
    width: 120px;
    margin: 10px 0 0 0;
  `}
`;

export const Text = styled(({ ...rest }) => <h2 {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.light};
    font-size: 1.4em;
    font-weight: 600;
    margin: 0;
  `}
`;

export const AcceptSubscription = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background: transparent !important;
    border: 1px solid ${theme.color.light};
    color: ${theme.color.light};
    padding: 10px 14px;
    width: 150px;
    text-transform: uppercase;
    margin: 50px 0 0 0;
  `}
`;

export const Close = styled(({ ...rest }) => <span {...rest} />)`
  ${({ theme }) => css`
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    color: ${theme.color.light};
    font-size: 1.8em;
  `}
`;

BannerSection.displayName = 'BannerSection';
Wrapper.displayName = 'Wrapper';
Message.displayName = 'Message';
Logo.displayName = 'Logo';
Text.displayName = 'Text';
AcceptSubscription.displayName = 'AcceptSubscription';
Close.displayName = 'Close';
