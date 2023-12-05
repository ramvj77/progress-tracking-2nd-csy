import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Func from './Func';
import App from './App';
import Car from './Car';
import Parent from './Parent';
import ClassDemo from './ClassDemo';
import rose from "../src/login/images/download.jfif";
import CustomizedTable from './CustomizedTable';
import SimpleSignIn from './SimpleSignIn';
import SimpleSignUp from './SimpleSignUp';
import SimpleDashboard from './SimpleDashboard';
import Heart from './Heart';
import SwitchTheme from './SwitchTheme';
import Hook from './Hook';
import ErrorHandling from './ErrorHandling';
import LifeCycle from './LifeCycle';
import Timer from './Timer';
import Array from './Array';
import Hoc from './Hoc';
import Form from './Form';
import ConditionalRendering from './ConditionalRendering';
import AxiosGet from'./AxiosGet';
import Navigate from './Router/Navigate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Navigate/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
