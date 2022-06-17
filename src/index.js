import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(rootReducer);
root.render(
	<StrictMode>
		<BrowserRouter>
		<Provider store={store}>
				<App />
		</Provider>
		
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
