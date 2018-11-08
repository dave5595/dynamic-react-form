import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './QuestionSummary.css';
import QuestionSummaryLabel from '../QuestionSummaryLabel/Component';

const renderQuestionSummary = (questions, answers) => {
  if (answers.length === 0) return <h2>You havent answered any questions yet :(</h2>
  return questions.map((question, index) => {
    return(
      <div className="question-summary">
        <QuestionSummaryLabel
          question={question.prompt}
          answer={answers[index][`question${index + 1}`]}
          questionClassName="question-summary-text"
        />
      </div>
    )
  });
};

const QuestionSummary = ({ questions, answers, history }) => (
    <div className="container">
      <div className="header">
        {
          answers.length > 0 ?(
            <h1 className="question-summary-header success">Success !</h1>
          ) :(
            <h1 className="question-summary-header">Uh-oh..</h1>
          )
        }
      </div>

      <div className="question-summary-content">
        {renderQuestionSummary(questions, answers)}
      </div>
      <div>
        <Button
          className="navigation-btn"
          size="large"
          onClick={history.goBack}>
          Previous
        </Button>
      </div>
    </div>
);

QuestionSummary.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired
};

export default QuestionSummary;