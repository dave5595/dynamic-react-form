import React from 'react';
import PropTypes from 'prop-types';

const QuestionSummaryLabel = ({question, answer}) => (
    <div>
      <h2>{question}</h2>
      <h3>{answer}</h3>
    </div>
);

QuestionSummaryLabel.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuestionSummaryLabel;