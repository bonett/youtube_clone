import React from 'react';
import PropTypes from 'prop-types';

function Home({ isDarkMode }) {
  return <section>Home</section>;
}

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Home.defaultProps = {};

export default Home;
