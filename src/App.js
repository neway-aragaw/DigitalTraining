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
import Home from './component/sign/Home.js';
import SignUp from './component/sign/SignUp.js';
import SignIn from './component/sign/SignIn.js';

function App() {
  const [userName, setUserName] = useState('');
  return (
    <div >
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      <Route path="/create-user" element={<CreateUser setUserName={setUserName} />} />
      <Route path="/M-C-G" element={<MultipleGates setUserName={setUserName} />} />
      <Route path="/trainers" element={     <TrainerChecklist trainerName="John Doe" />} />
      <Route path="/about" element={<About setUserName={setUserName} />} />
      <Route path="/gates" element={<Gates setUserName={setUserName} />} />
      <Route path="/training-home" element={<TrainingHome userName={userName} />} />
        <Route exact path="/" element={<Training />} />
        <Route path="/working-environment" element={<WorkingEnvironment userName={userName} />} />
        <Route path="/multiple-choice" element={<MultipleChoiceTest userName={userName} />} />
        <Route path="/video2" element={<LobbyT />} />
        <Route path="/understanding-tablet" element={<TabletX />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/M-C-L" element={<MultipleChoiceLobby />} />
        <Route path="/M-C-T" element={<MCT />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/congra" element={<Congratulations />} />
      </Routes>
      </div>
  );
}

export default App;
// 


