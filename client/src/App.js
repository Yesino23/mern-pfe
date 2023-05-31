import './App.css';
import { Route, Routes } from 'react-router-dom';
import AgentLogin  from './espace_agents/agent_login/AgentLogin'
import AgentAdmin from './espace_agents/agent_admin/AgentAdmin'
import AgentInspection from './espace_agents/Agent_inspecteur/AgentInspection'
import  AgentInstruction  from "./espace_agents/agent_instructeur/AgentInstruction";
import  NotFound from './NotFound'
import React from 'react'

const App = () => {
  return (
    
     
      <Routes>
       <Route path='/' element={<h1>welcome espace public</h1>} />
       <Route path='/espaceAgent'>
       <Route path='login' element={<AgentLogin/>} />
       <Route path='Admin' element={<AgentAdmin/>} />
       <Route path='Inspection' element={<AgentInspection/>} />
       <Route path='Instruction' element={<AgentInstruction/>} />
       </Route>
       <Route  path='*' element={<NotFound/>}/>
      </Routes>
    );
  
}

export default App


