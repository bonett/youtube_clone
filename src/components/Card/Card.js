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
  const channelTitle = video.publisher[video.publisher.length - 1].name;
  const videoUrl = `${video.contentUrl}?embed=true&autoplay=false&ocid=bingembedvideo`;
  return (
    <Card isDarkMode={isDarkMode}>
      <Cover>
        <iframe
          src={videoUrl}
          scrolling="no"
          allowfullscreen="true"
          loading="eager"
        ></iframe>
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
