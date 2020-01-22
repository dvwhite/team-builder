import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <Form 
        teamMemberState={teamMembers}
        setTeamMemberState={setTeamMembers}/>
      {
        teamMembers.map(person => (
          <div>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Role: {person.role}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
