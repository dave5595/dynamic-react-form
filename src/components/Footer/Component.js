import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'antd';
import './Footer.css';
import Question from "../Question/Component";
import PropTypes from "prop-types";

class Footer extends PureComponent {

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  render(){
    const { questions, current, prev, next, form:{getFieldsError} } = this.props;
    return(
      <footer className="footer">
         <Button
           className="navigation-btn"
           size="large"
           disabled={current === 0}
           onClick={prev}>
           Previous
         </Button>
          <Button
            className="navigation-btn"
            htmlType="submit"
            size="large"
            disabled={this.hasErrors(getFieldsError())}
            style={{ marginLeft: 8 }}
            onClick={next}>
            Next
          </Button>
      </footer>
    )}
  }

Footer.propTypes = {
  questions: PropTypes.array,
  current: PropTypes.number,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  form: PropTypes.shape({
    getFieldError: PropTypes.func,
  })
};

Footer.defaultProps = {
  question:{question_type: 'TextQuestion', prompt: 'This is a default prompt'}
};

export default Footer;