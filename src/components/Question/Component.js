import React, { PureComponent } from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

const TextArea = Input.TextArea;
const FormItem = Form.Item;

class Question extends PureComponent{

  handleAnswer = () => {
  };

  renderInput = () => {
    const {
      value,
      handleInputChange,
      form,
      number,
      question:{ question_type,min_char_length, is_required } ,
      form:{ getFieldDecorator, isFieldTouched, getFieldError }
    } = this.props;
    const fieldError = isFieldTouched(`question${number}`) && getFieldError(`question${number}`);

    if (question_type){
      return(
        <FormItem
          validateStatus={fieldError ? 'error' : ''}
          help={fieldError || ''}
        >
          {
            form.getFieldDecorator(`question${number}`,{
              validateFirst: true,
              rules: [
                { required: is_required, message: 'This question is required' },
                { min: min_char_length, message: `Minimum character length has to be more than ${min_char_length}`}
              ],
            })(<TextArea autosize={{ minRows: 3, maxRows: 5}} onChange={handleInputChange}/>)
          }
      </FormItem>
      )
    }
  };

  render(){
    const { prompt } = this.props.question;
    return(
      <div>
        <h1>{prompt}</h1>
        {this.renderInput()}
      </div>
    )
  }
}

Question.propTypes = {
  question: PropTypes.shape({
    question_type: PropTypes.string.isRequired,
    prompt: PropTypes.string
  }),
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    isFieldTouched: PropTypes.func,
    getFieldError: PropTypes.func,
  })
};

Question.defaultProps = {
  question:{question_type: 'TextQuestion', prompt: 'This is a default prompt'}
};

export default Question;