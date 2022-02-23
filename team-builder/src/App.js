import './App.css';
import React, { useState } from 'react';
import initialTeamList from './dummyData'
import Form from './Form'
import ListItem from './ListItem'

const initialFormValues = {
  name: '',
  email: '',
  role:'',
}

function App() {
  const [teamList, setTeamList] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')
  // const [memberToEdit, setMemberToEdit] = useState('')
  
  
  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue});
    console.log(formValues)
  }

  const submitForm = () => {
    const newMember = {
      name:formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: Date.now() * Math.random()
    }
    if (!newMember.name || !newMember.role){
      setError('You must enter your name AND choose a role')
      return
    }
    

    setTeamList([newMember, ...teamList])
    setFormValues(initialFormValues)
    setError('');
    console.log(newMember)
  }  

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Team</h1>
       <ul>Members
       {teamList.map((member, idx) =>(

        <ListItem key={idx} member={member} teamList={teamList} setTeamList={setTeamList} />
         
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
