import React from 'react';
import PropTypes from 'prop-types';

const QuestionSummaryLabel = ({question, answer, questionClassName}) => (
    <div>
      <h2 className={questionClassName}>{question}</h2>
      <h3>{answer}</h3>
    </div>
);

QuestionSummaryLabel.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default QuestionSummaryLabel;