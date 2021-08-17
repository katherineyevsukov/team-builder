import './App.css';
import React, { useState } from 'react';

const initialTeamList = [
  {name: 'Patrick', email: 'patrick@patrick.com', role: 'Backend Engineer'},
  {name: 'John', email: 'john@john.com', role: 'Full Stack Developer'},
  {name: 'Meg', email: 'meg@meg.com', role: 'Web Designer'}
]

function App() {
  const [teamList, setTeamList] = useState(initialTeamList)
  return (
    <div className="App">
      <header className="App-header">
       <h1>The Team</h1>
       <ul>Members
       {teamList.map((member, idx) =>(
         <li>{member.name} is a {member.role}</li>
       ) )}
       </ul>
      </header>
    </div>
  );
}

export default App;
