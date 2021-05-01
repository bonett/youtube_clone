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
  const thumbnail = video.snippet.thumbnails.default;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const datePublished = video.snippet.publishedAt;
  return (
    <Card isDarkMode={isDarkMode}>
      <Cover>
        <img src={thumbnail.url} />
      </Cover>
      <Info isDarkMode={isDarkMode}>
        <Title isDarkMode={isDarkMode}>{title}</Title>
        <Details isDarkMode={isDarkMode}>
          <ChannelTitle isDarkMode={isDarkMode}>
            {channelTitle} <span className="material-icons">verified</span>
          </ChannelTitle>
          <DateSince isDarkMode={isDarkMode}>
            {utils.getDateDiff(datePublished)}
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
