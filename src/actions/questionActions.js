export const SAVE_ANSWER = 'SAVE_ANSWER';
export const DECREMENT_CURRENT = 'DECREMENT_CURRENT';
export const INCREMENT_CURRENT = 'INCREMENT_CURRENT';

export const saveAnswer = (answer) =>{
  return{
    type: SAVE_ANSWER,
    answer
  }
};

export const nextQuestion = () => {
  return{
    type: INCREMENT_CURRENT
  }
};

export const previousQuestion = () => {
  return{
    type: DECREMENT_CURRENT
  }
};