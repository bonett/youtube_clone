import React from 'react';
import PropTypes from 'prop-types';
import CardVideo from '../Card/Card';
import { HomeSection, Columns } from './Home.styled';
function Home({ isDarkMode, popularVideos }) {
  return (
    <HomeSection isDarkMode={isDarkMode}>
      <Columns>
        {popularVideos.map((video) => {
          return (
            <CardVideo
              key={video.videoId}
              isDarkMode={isDarkMode}
              video={video}
            />
          );
        })}
      </Columns>
    </HomeSection>
  );
}

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  popularVideos: PropTypes.any
};

Home.defaultProps = {
  popularVideos: []
};

export default Home;
