import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Training from './component/Training'; // Assuming Training is in 'components' folder
import TrainingHome from './component/TrainingHome';
import WorkingEnvironment from './component/Working-environment';
import MultipleChoiceTest from './component/MultipleChoice';
import LobbyT from './component/VideoLobby1.js';
import MultipleChoiceLobby from './component/MultipleChoiceLobby';
import Tablet from './component/VideoLobby1.js';
import MCT from './component/MultipleChoiceTablet';
import Congratulations from './component/Congratulations';
import "./App.css"
/* index.css or App.css */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CreateUser from './component/CreateUser';
import CreateUserAccount from './component/CreateUser';
import Header from './component/Header';
import Directory from './component/Directory.js';
import TabletX from './component/ExTablet.js';
import Gates from './component/gates/Gate.js';
import MultipleGates from './component/Mulitple_gates.js';
import About from './component/About.js';
import TrainingChecklist from './component/Trainers/TrainingChecklist.js';
import TrainerChecklist from './component/Trainers/TrainingChecklist.js';
import User from './component/User.js';
import Tablet2 from './component/ExTablet2.js';
import ExTabletFinal from './component/ExTbaletFinal.js';

function App() {
  const [userName, setUserName] = useState('');
  return (
    <div >
      
      <Routes>
  
    
   
      <Route path="/M-C-G" element={<MultipleGates setUserName={setUserName} />} />
      <Route path="/trainers" element={     <TrainerChecklist trainerName="John Doe" />} />
      <Route path="/about" element={<About setUserName={setUserName} />} />
      <Route path="/gates" element={<Gates setUserName={setUserName} />} />
      <Route path="/training-home" element={<TrainingHome userName={userName} />} />
        <Route exact path="/" element={<Training />} />
        <Route path="/working-environment" element={<WorkingEnvironment userName={userName} />} />
        <Route path="/multiple-choice" element={<MultipleChoiceTest userName={userName} />} />
        <Route path="/working-lobby" element={<LobbyT />} />
        <Route path="/understanding-tablet" element={<TabletX />} />
        <Route path="/understanding-tablet/understanding-tablet2" element={<Tablet2 />} />
        <Route path="/final" element={<ExTabletFinal />} />
        <Route path="/user" element={<User setUserName={setUserName} />} />
   
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/M-C-L" element={<MultipleChoiceLobby />} />
        <Route path="/M-C-T" element={<MCT />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/congra" element={<Congratulations />} />
        <Route path="/create-user" element={<CreateUser setUserName={setUserName} />} />
      </Routes>
      </div>
  );
}

export default App;
// 


