import React, { PureComponent } from 'react';
import { Form } from 'antd';
import Header from "../Header/Component";
import Content from "../Content";
import PropTypes from "prop-types";


class DynamicForm extends PureComponent{
  render(){
    const { payload:{title, questions}, history } = this.props;
    return(
      <div className="main-section">
        <Form>
          <Header title={title} />
          <Content questions={questions} history={history}/>
        </Form>
      </div>
    )
  }
}

DynamicForm.propTypes = {
  payload: PropTypes.object,
  history: PropTypes.object.isRequired
};

export default DynamicForm;
