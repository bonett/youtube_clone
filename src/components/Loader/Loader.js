import React from 'react';
import { LoaderWrapper } from './Loader.styled';
import loading from '../../static/images/loading.gif';

function Loader() {
  return (
    <LoaderWrapper>
      <img src={loading} />
    </LoaderWrapper>
  );
}

export default Loader;
