import React from 'react';
import PropTypes from 'prop-types';
import './QuestionSummary.css';
import QuestionSummaryLabel from '../QuestionSummaryLabel/Component';

const renderQuestionSummary = (questions, answers) => {
  if (answers.length === 0) return <h2>You havent answered any questions yet :(</h2>
  return questions.map((question, index) => {
    return(
      <div className="question-summary">
        <QuestionSummaryLabel question={question.prompt} answer={answers[index][`question${index + 1}`]}/>
      </div>
    )
  });
};

const QuestionSummary = ({ questions, answers }) => (
    <div className="container">
      <div className="header">
        {
          answers.length > 0 ?(
            <h1>Success !</h1>
          ) :(
            <h1>Uh-oh..</h1>
          )
        }
      </div>

      <div className="question-summary-content">
        {renderQuestionSummary(questions, answers)}
      </div>
    </div>
);

QuestionSummary.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired
};

export default QuestionSummary;