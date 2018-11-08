import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import QuestionSummary from "./components/QuestionSummary";
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root.reducer';
import DynamicForm from "./components/DynamicForm/Component";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const payload = {
  "title": "This is a title for the form Header",
    "questions": [
    {
      "id": 2447,
      "question_type": "TextQuestion",
      "prompt": "THIS IS A REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLYREALLYREALLY REALLY REALLY REALLY LONG QUESTION?",
      "is_required": false,
      "min_char_length": 15
    },
    {
      "id": 2448,
      "question_type": "TextQuestion",
      "prompt": "What is your second answer?",
      "is_required": true,
      "min_char_length": 1
    },
    {
      "id": 2500,
      "question_type": "TextQuestion",
      "prompt": "What is your third answer?",
      "is_required": true,
      "min_char_length": 1,
    }
  ]
};

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/dynamicForm" render={(props)=>(<DynamicForm payload={payload} {...props}/> )} />
          <Route exact path="/dynamicForm/success" render={(props)=> <QuestionSummary questions={payload.questions} {...props} />}/>
        </Switch>
      </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
