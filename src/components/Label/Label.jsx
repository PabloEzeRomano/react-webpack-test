import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

export const Label = ({ labelStyle, labelText }) => (
  <span className={`${labelStyle}-label`}>
    {labelText}
  </span>
);

Label.propTypes = {
  labelStyle: PropTypes.string,
  labelText: PropTypes.string,
};

Label.defaultProps = {
  labelStyle: 'medium-label',
  labelText: 'press',
};
