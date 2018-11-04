import React, { PureComponent } from 'react';
import { Form } from 'antd';
import Header from "../Header/Component";
import Content from "../Content/Component";


class DynamicForm extends PureComponent{
  state = {};

  render(){
    const { payload:{title, questions}, history } = this.props;
    console.log(this.props);
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

export default DynamicForm;
