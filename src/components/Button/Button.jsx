import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends React.Component {
  render() {
    return(
      <button className={this.props.buttonStyle}>
        {this.props.buttonText}
      </button>
    );
  }

}

Button.propTypes = {
  buttonStyle: PropTypes.string,
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: 'medium',
  buttonText: 'press',
};
