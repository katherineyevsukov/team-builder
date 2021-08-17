import React from 'react';



export default function Form(props) {
const { update, submit, values } = props

const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <form onSubmit={onSubmit}>
        <label>Name:
            <input
                type="text"
                name="name"
                value={values.name}
                placeholder="What is your name?"
                onChange={onChange}
            />
        </label>
        <label>Email:
            <input
                type="text"
                name="email"
                value={values.email}
                placeholder="Email address (optional)"
                onChange={onChange}
            />
        </label>
        <label>Role:
            <select name='role'
            value={values.role} onChange={onChange}>
                <option value=''>--Choose a Role--</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Web Designer'>Web Designer</option>
                <option value='Full Stack Developer'>Full Stack Developer</option>
            </select>
        </label>
        <div>
            <button>Join!</button>
        </div>
    </form>
)

}