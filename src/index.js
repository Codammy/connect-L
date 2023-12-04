import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import Msg from './views/Msg';
import Learn from './views/Learn';

import LearningResources from './views/other-views/LearningResources';
import CareerPath from './views/other-views/CareerPath';
import Communities from './views/other-views/Communities';
import NetworkCollaboration from './views/other-views/NetworkCollaboration';
import BookMarks from './views/other-views/Share';
import MakeResearch from './views/other-views/MakeResearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const content = [
  { long: "Learning Resources", short: "LR" },
  { long: "Network Collaboration", short: "NC" },
  { long: "Career Path", short: "CP" },
  { long: "Make Research", short: "MR" },
  { long: "BookMarks", short: "BK" },
]
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/Feeds' element={<App />}></Route>
        <Route exact path='/Msg' element={<Msg />}></Route>
        <Route exact path='/Learn' element={<Learn content={content} />}></Route>

        <Route exact path='/Learn/learning-resources' element={<LearningResources />}></Route>
        <Route exact path='/Learn/network-collaboration' element={<NetworkCollaboration />}></Route>
        <Route exact path='/Learn/career-path' element={<CareerPath />}></Route>
        <Route exact path='/Learn/make-research' element={<MakeResearch />}></Route>
        <Route exact path='/Learn/saved' element={<BookMarks />}></Route>
        <Route exact path='/Learn/communities' element={<Communities />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);