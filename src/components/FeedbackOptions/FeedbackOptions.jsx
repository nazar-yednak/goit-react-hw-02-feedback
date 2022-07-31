import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onCountFeedback } = this.props;
    return options.map(option => (
      <Button key={option} onClick={() => onCountFeedback(option)}>
        {option}
      </Button>
    ));
  }
}
export default FeedbackOptions;
FeedbackOptions.propType = {
  options: PropTypes.number,
  onCountFeedback: PropTypes.func,
};
