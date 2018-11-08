import { SAVE_ANSWER, INCREMENT_CURRENT, DECREMENT_CURRENT } from "../actions/questionActions";
const INITIAL_STATE = { answers: [], current: 0};
export const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case SAVE_ANSWER:
      const questionNumber = Object.keys(action.answer)[0];
      if(hasAlreadyAnswered(state.answers, questionNumber)){
        // perform immutable updates to the answer array
        const updatedAnswers = updateAnswer(state.answers, questionNumber, action.answer);
        return{
          ...state,
          answers: updatedAnswers
        }
      }else {
        return {
          ...state,
          answers: [...state.answers, action.answer]
        };
      }
    case INCREMENT_CURRENT:
      return{
        ...state,
        current: state.current + 1
      };

    case DECREMENT_CURRENT:
     return {
        ...state,
        current: state.current - 1
      };
    default:
      return state;
  }
};

const hasAlreadyAnswered = (arr, prop) => {
  for (let obj of arr){
    if (obj.hasOwnProperty(prop)) {
      return true
    }
  }
  return false
};

const updateAnswer = (answers, questionNumber, updatedAnswer) => {
  return answers.map(answer => answer.hasOwnProperty(questionNumber) && updatedAnswer !== answer ? updatedAnswer : answer);
};





