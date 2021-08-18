import React, { useState } from 'react';

  export default function ListItem (props) {
    const { member, teamList, setTeamList } = props
   
    const [isEditing, setIsEditing] = useState(false)
    const [formValues, setFormValues] = useState(member)

      
     
      const edit = () => {
          setIsEditing(!isEditing)
          if(isEditing){
            for(let i in teamList){
                if(teamList[i].id === member.id){
                    member.name = formValues.name
                    member.role = formValues.role
                }
            }
          }
        }

        const handleChange = e => {
            const { name, value } = e.target
            setFormValues({
                ...formValues,
                [name]: value
            })
        }



      return(
      <div>
          {!isEditing ?
                <li>{member.name} is a {member.role}</li>
            : 
            <form>
                <input
                name="name" 
                type="text"
                value={formValues.name}
                onChange={handleChange}
                />
                <span> is a </span>
                <input 
                name="role"
                type="text"
                value={formValues.role}
                onChange={handleChange}
                />
            </form>
            }
            <button onClick={() => edit()}>{isEditing ? 'Update' : 'Edit Member'}</button>
      </div>
    )
}

