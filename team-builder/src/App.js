import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <Form 
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}/>
      {
        teamMembers.map(person => (
          <div className="card">
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
