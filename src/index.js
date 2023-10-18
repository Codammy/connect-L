import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import Msg from './views/Msg';
import Learn from './views/Learn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const content = [
  {long: "Learning Resources", short: "LR"},
  {long: "Network Collaboration", short: "NC"},
  {long: "Career Path", short: "CP"},
  {long: "Make Research", short: "MR"},
  {long: "Share", short: "SH"},
  {long: "Communities", short: "CMT"},
]
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path='/' element={<App />}></Route>
          <Route exact path='/Feeds' element={<App />}></Route>
          <Route exact path='/Msg' element={<Msg />}></Route>
          <Route exact path='/Learn' element={<Learn content={content}/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);