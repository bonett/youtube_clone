/* eslint-disable react/no-unknown-property */
import React from 'react';
import PropTypes from 'prop-types';
import utils from '../../utils';
import {
  Card,
  Cover,
  Info,
  Title,
  Details,
  ChannelTitle,
  DateSince
} from './Card.styled';

function CardVideo({ isDarkMode, video }) {
  console.log(video);
  const channelTitle = video.publisher[video.publisher.length - 1].name;
  return (
    <Card isDarkMode={isDarkMode}>
      <Cover>
        <img src={video.thumbnailUrl} />
      </Cover>
      <Info isDarkMode={isDarkMode}>
        <Title isDarkMode={isDarkMode}>{video.name}</Title>
        <Details isDarkMode={isDarkMode}>
          <ChannelTitle isDarkMode={isDarkMode}>
            {channelTitle} <span className="material-icons">verified</span>
          </ChannelTitle>
          <DateSince isDarkMode={isDarkMode}>
            {utils.getDateDiff(video.datePublished)}
          </DateSince>
        </Details>
      </Info>
    </Card>
  );
}

CardVideo.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  video: PropTypes.object.isRequired
};

CardVideo.defaultProps = {};

export default CardVideo;
