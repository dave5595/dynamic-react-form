import React, { PureComponent,Component } from 'react';
import { Steps, Form } from 'antd';
import Footer from '../Footer/Component';
import Question from '../Question';
import './Content.css';
import PropTypes from "prop-types";

const Step = Steps.Step;
//todo: try to setup redux to save form state and pass it to mapPropsToField to display past question values
//todo: save each form state and display it at the end
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
      console.log(values);
      if (!err) {
          saveAnswer(values);
          this.next();
      }
    });
  };

  containsObject = (prop, list) => {
    for (let obj in list) {
      if (obj.hasOwnProperty(prop)){
        return true
      }
    }
    return false;
  }

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
            onChange={this.handleFormChange}
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