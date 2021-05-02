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

function CardVideo({ isDarkMode, video, handleClickCard, recommendedSection }) {
  const channelTitle = video.publisher[video.publisher.length - 1].name;
  return (
    <React.Fragment>
      {!recommendedSection ? (
        <Card
          isDarkMode={isDarkMode}
          onClick={() => handleClickCard(video.videoId)}
        >
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
      ) : (
        <Card
          className="recommended"
          isDarkMode={isDarkMode}
          onClick={() => handleClickCard(video.videoId)}
        >
          <Cover className="cover">
            <img src={video.thumbnailUrl} />
          </Cover>
          <Info isDarkMode={isDarkMode} className="info-recommended">
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
      )}
    </React.Fragment>
  );
}

CardVideo.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  video: PropTypes.object.isRequired,
  handleClickCard: PropTypes.func,
  recommendedSection: PropTypes.bool
};

CardVideo.defaultProps = {
  handleClickCard: () => {},
  recommendedSection: false
};

export default CardVideo;
