import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <div className="App">
      <Form 
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        setMemberToEdit={setMemberToEdit}
      />
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
