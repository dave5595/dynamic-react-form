import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import QuestionSummary from "./components/QuestionSummary/Component";
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
      "prompt": "What is your first answer?",
      "is_required": false,
      "min_char_length": 15
    },
    {
      "id": 2448,
      "question_type": "TextQuestion",
      "prompt": "What is your second answer?",
      "is_required": true,
      "min_char_length": 100
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
          <Route exact path="/dynamicForm" render={()=>(<DynamicForm payload={payload}/>)} />
          <Route exact path="/dynamicForm/success" render={(props)=> <QuestionSummary {...props} />}/>
        </Switch>
      </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
