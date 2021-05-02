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
function Details({ isDarkMode, videoDetails, videosRecommended }) {
  console.log(videoDetails);

  const viewDetailsPage = () => {};

  const pathName = window.location.pathname;
  const isDetailsView = pathName.split('/');
  const sidebar = document.querySelector('#asideId');
  const mainContent = document.querySelector('#main-content');
  const channelTitle =
    videoDetails.publisher[videoDetails.publisher.length - 1].name;

  if (isDetailsView && isDetailsView[1] === 'watch') {
    sidebar.style.display = 'none';
    mainContent.style.width = '100%';
  } else {
    sidebar.style.display = 'block';
    mainContent.style.width = '87%';
  }

  return (
    <DetailsWrapper isDarkMode={isDarkMode}>
      <Content>
        <Video>
          <iframe
            src="https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000188461"
            bgcolor="#131313"
            scrolling="no"
          ></iframe>
          <Name isDarkMode={isDarkMode}>{videoDetails.name}</Name>
          <Description isDarkMode={isDarkMode}>
            {videoDetails.description}
          </Description>
          <Publisher isDarkMode={isDarkMode}>
            {channelTitle} <span className="material-icons">verified</span>
          </Publisher>
          <DatePublished isDarkMode={isDarkMode}>
            {utils.getDateDiff(videoDetails.datePublished)}
          </DatePublished>
        </Video>
        <List>
          <div className="list">
            {videosRecommended.map((recommended) => {
              return (
                <CardVideo
                  key={recommended.videoId}
                  isDarkMode={isDarkMode}
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
  isDarkMode: PropTypes.bool.isRequired,
  videoDetails: PropTypes.object,
  videosRecommended: PropTypes.array
};

Details.defaultProps = {
  videosRecommended: []
};

export default Details;
