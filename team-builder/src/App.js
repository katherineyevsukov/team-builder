import './App.css';
import React, { useState } from 'react';
import initialTeamList from './dummyData'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role:'',
}

function App() {
  const [teamList, setTeamList] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')
  
  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue});
    console.log(formValues)
  }

  const submitForm = () => {
    const newMember = {
      name:formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.name || !newMember.role){
      setError('You must enter your name AND choose a role')
      return
    }
    

    setTeamList([newMember, ...teamList])
    setFormValues(initialFormValues)
    setError('');
  }
  

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Team</h1>
       <ul>Members
       {teamList.map((member, idx) =>(
         <li>{member.name} is a {member.role}</li>
       ) )}
       </ul>
       <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
       />
       <h3>{error}</h3>
      </header>
    </div>
  );
}

export default App;
