import React, { PureComponent } from 'react';
import { Steps, Form } from 'antd';
import Footer from '../Footer/Component';
import Question from '../Question/Component';
import './Content.css';
import PropTypes from "prop-types";

const Step = Steps.Step;
//todo: save each form state and display it at the end
class Content extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  componentDidMount() {
    this.props.form.validateFields();
  }
  
  componentDidUpdate(prevProps, prevState){
    // To reset validation for next question.
    if (this.state.current !== prevState.current){
      this.props.form.validateFields();
    }
  }

  validate = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.next();
      }
    });
  };

  next = () => {
    const { current } = this.state;
    const { questions, history } = this.props;
    if (current !== questions.length - 1){
      const current = this.state.current + 1;
      this.setState({ current });
    } else{
      history.push('/dynamicForm/success')
    }
  };

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  render(){
    const { current } = this.state;
    const { questions, form } = this.props;
    return(
      <div className="body">
        <Steps current={current}>
          {questions.map((question, i) => <Step key={question.id} />)}
        </Steps>
        <div className="steps-content">
          <Question question={questions[current]} number={current + 1} form={form}/>
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

export default Form.create()(Content);