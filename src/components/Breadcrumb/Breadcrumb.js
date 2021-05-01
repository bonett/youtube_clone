import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbWrapper } from './Breadcrumb.styled';

function Breadcrumb({ isDarkMode }) {
  return (
    <BreadcrumbWrapper isDarkMode={isDarkMode} className="breadcrumb">
      <ul>
        <li>
          <a href="../">Bulma</a>
        </li>
        <li>
          <a href="../">Templates</a>
        </li>
        <li>
          <a href="../">Examples</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Admin
          </a>
        </li>
      </ul>
    </BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;
