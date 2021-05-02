import React from 'react';
import PropTypes from 'prop-types';
import {
  DetailsWrapper,
  Content,
  Video,
  List,
  Name,
  Description,
  Publisher,
  DatePublished
} from './Details.styled';
import CardVideo from '../Card';
import utils from '../../utils';
function Details({ isdarkmode, videoDetails, history, videosRecommended }) {
  const channelTitle =
    videoDetails.publisher[videoDetails.publisher.length - 1].name;

  const viewDetailsPage = (id) => {
    history.push(`/watch/${id}`);
  };

  const openUrl = (url) => {
    window.open(url, '_blank');
  };

  const getUrlIframe = (video) => {
    if (video && video.embedHtml) {
      const url = video.embedHtml.split('src="');
      const result = url[1].split('"');
      return result[0];
    }

    return video.contentUrl;
  };

  return (
    <DetailsWrapper isdarkmode={isdarkmode}>
      <Content>
        <Video id="parent">
          <iframe src={getUrlIframe(videoDetails)}></iframe>
          <Name
            isdarkmode={isdarkmode}
            onClick={() => openUrl(videoDetails.webSearchUrl)}
          >
            {videoDetails.name}
          </Name>
          <Description isdarkmode={isdarkmode}>
            {videoDetails.description}
          </Description>
          <Publisher
            isdarkmode={isdarkmode}
            onClick={() => openUrl(videoDetails.hostPageUrl)}
          >
            {channelTitle} <span className="material-icons">verified</span>
          </Publisher>
          <DatePublished isdarkmode={isdarkmode}>
            {utils.getDateDiff(videoDetails.datePublished)}
          </DatePublished>
        </Video>
        <List isdarkmode={isdarkmode}>
          <h4 className="title">Recommended List</h4>
          <div className="list">
            {videosRecommended.map((recommended) => {
              return (
                <CardVideo
                  key={recommended.videoId}
                  isdarkmode={isdarkmode}
                  video={recommended}
                  handleClickCard={viewDetailsPage}
                  recommendedSection={true}
                />
              );
            })}
          </div>
        </List>
      </Content>
    </DetailsWrapper>
  );
}

Details.propTypes = {
  isdarkmode: PropTypes.bool.isRequired,
  videoDetails: PropTypes.object,
  videosRecommended: PropTypes.array,
  history: PropTypes.object
};

Details.defaultProps = {
  videosRecommended: []
};

export default Details;
