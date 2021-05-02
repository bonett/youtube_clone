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

function CardVideo({ isdarkmode, video, handleClickCard, recommendedSection }) {
  const channelTitle = video.publisher[video.publisher.length - 1].name;
  return (
    <React.Fragment>
      {!recommendedSection ? (
        <Card
          isdarkmode={isdarkmode}
          onClick={() => handleClickCard(video.videoId)}
        >
          <Cover>
            <img src={video.thumbnailUrl} />
          </Cover>
          <Info isdarkmode={isdarkmode}>
            <Title isdarkmode={isdarkmode}>{video.name}</Title>
            <Details isdarkmode={isdarkmode}>
              <ChannelTitle isdarkmode={isdarkmode}>
                {channelTitle} <span className="material-icons">verified</span>
              </ChannelTitle>
              <DateSince isdarkmode={isdarkmode}>
                {utils.getDateDiff(video.datePublished)}
              </DateSince>
            </Details>
          </Info>
        </Card>
      ) : (
        <Card
          className="recommended"
          isdarkmode={isdarkmode}
          onClick={() => handleClickCard(video.videoId)}
        >
          <Cover isdarkmode={isdarkmode} className="cover">
            <img src={video.thumbnailUrl} />
          </Cover>
          <Info className="info-recommended">
            <Title isdarkmode={isdarkmode}>{video.name}</Title>
            <Details>
              <ChannelTitle isdarkmode={isdarkmode}>
                {channelTitle} <span className="material-icons">verified</span>
              </ChannelTitle>
              <DateSince isdarkmode={isdarkmode}>
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
  isdarkmode: PropTypes.bool.isRequired,
  video: PropTypes.object.isRequired,
  handleClickCard: PropTypes.func,
  recommendedSection: PropTypes.bool
};

CardVideo.defaultProps = {
  handleClickCard: () => {},
  recommendedSection: false
};

export default CardVideo;
