import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message: 'Hi, how are you?', likesCount:4},
    {message: 'Hi, it is my first project )', likesCount:9}
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Aleksei'},
    {id: 3, name: 'Sanya'}
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Whats are you doing?'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
