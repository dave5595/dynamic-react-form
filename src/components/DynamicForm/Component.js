import React, { PureComponent } from 'react';
import { Form } from 'antd';
import Header from "../Header/Component";
import Content from "../Content/Component";


class DynamicForm extends PureComponent{
  state = {};

  render(){
    const { payload:{title, questions} } = this.props;
    return(
      <div className="main-section">
        <Form>
          <Header title={title} />
          <Content questions={questions} />
        </Form>
      </div>
    )
  }
}

export default DynamicForm;
