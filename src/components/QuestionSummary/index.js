import { connect } from 'react-redux';
import QuestionSummary from './Component';

const mapStateToProps = (state) => {
  return{
    answers: state.questionReducer.answers
  }
};

export default connect(mapStateToProps)(QuestionSummary);