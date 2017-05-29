import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
//Components
import App from './components/App';


const store=createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        )
    }
}

const root=document.getElementById('root');
ReactDOM.render(<Main/>,root);
