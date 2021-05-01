import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbWrapper, List, Item } from './Breadcrumb.styled';

function Breadcrumb({ isDarkMode }) {
  return (
    <BreadcrumbWrapper isDarkMode={isDarkMode} className="breadcrumb">
      <List className="breadcrumb">
        <Item>
          <a>Bulma</a>
        </Item>
        <Item>
          <a>Bulma</a>
        </Item>
      </List>
    </BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;
