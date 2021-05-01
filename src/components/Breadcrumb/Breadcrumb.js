import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BreadcrumbWrapper, List } from './Breadcrumb.styled';

function Breadcrumb({ isDarkMode, suggestions, queryType }) {
  return (
    <BreadcrumbWrapper isDarkMode={isDarkMode} className="breadcrumb">
      <List isDarkMode={isDarkMode} className="breadcrumb">
        {suggestions.map((item, index) => {
          return (
            <span
              key={index}
              className={classnames({
                'tag is-active': queryType === item.text
              })}
            >
              {item.displayText}
            </span>
          );
        })}
      </List>
    </BreadcrumbWrapper>
  );
}

Breadcrumb.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  suggestions: PropTypes.array,
  queryType: PropTypes.string.isRequired
};

Breadcrumb.defaultProps = {
  suggestions: []
};

export default Breadcrumb;
