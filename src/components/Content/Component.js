import React, { PureComponent,Component } from 'react';
import { Steps, Form } from 'antd';
import Footer from '../Footer/Component';
import Question from '../Question';
import './Content.css';
import PropTypes from "prop-types";

const Step = Steps.Step;

class Content extends PureComponent{

  componentDidMount() {
    this.props.form.validateFields();
  }
  
  componentDidUpdate(prevProps){
    // To reset validation for next question.
    if (this.props.current !== prevProps.current){
      let i = 0;
      this.props.form.validateFields();
    }
  }

  validate = (e) => {
    e.preventDefault();
    const { form, saveAnswer, answers, current } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
          saveAnswer(values);
          this.next();
      }
    });
  };

  next = () => {
    const { questions, history, saveAnswer, current, nextQuestion } = this.props;
    if (current !== questions.length - 1){
      nextQuestion();
    } else{
      history.push('/dynamicForm/success')
    }
  };

  prev = () => {
    const { previousQuestion } = this.props;
    previousQuestion();
  };

  render(){
    const { questions, form, current } = this.props;
    return(
      <div className="body">
        <Steps current={current}>
          {questions.map((question, i) => <Step key={question.id} />)}
        </Steps>
        <div className="steps-content">
          <Question
            question={questions[current]}
            number={current + 1}
            form={form}
          />
        </div>
        <div className="steps-action">
         <Footer
            form={form}
            questions={questions}
            current={current}
            next={this.validate}
            prev={this.prev}
         />
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  questions: PropTypes.array,
  form: PropTypes.object
};

export default Content;