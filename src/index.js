import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id:1, message:'Hi, how are you?', like:41},
    {id:2, message:'It is my first post', like:8},
    {id:3, message:'Test post', like:14},
]
let dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'},
    {id:5, name:'Viktor'}
]
let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'Text'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
