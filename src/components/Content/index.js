import { connect } from 'react-redux';
import Content from './Component';
import { saveAnswer, nextQuestion, previousQuestion } from "../../actions/questionActions";
import {Form} from "antd/lib/index";

const mapStateToProps = (state) => {
  return{
    answers: state.questionReducer.answers,
    current: state.questionReducer.current
  }
};

export default connect(mapStateToProps, { saveAnswer, nextQuestion, previousQuestion })(Form.create({
  mapPropsToFields(props) {
    // //todo: handle bug with curr is undefined
    const propsObj = props.answers.reduce((accumulator, curr, index) => {
      const questionNum = `question${index + 1}`;
        const value = Object.getOwnPropertyDescriptor(curr, questionNum) && Object.getOwnPropertyDescriptor(curr, questionNum).value;
        accumulator = {...accumulator, [questionNum] : Form.createFormField({value: value})};
        return accumulator
    },{});
    console.log(propsObj)
    return propsObj;
  },
})(Content));