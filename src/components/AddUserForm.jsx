import React from 'react'
import useAddUserForm from './useAddUser'


const AddUserForm = (props)=> {
  //make sure to pass the cb in
  const { hSubmit,handleInputChange,input} = useAddUserForm(props.addUser);
  return (
    <form  onSubmit={hSubmit}>
      <div>
        <label>Name:  </label>
        <input type="test" name="name" required  onChange={handleInputChange} value={input.name} />
      </div>
      <div>
        <label>Email Address:  </label>
        <input type="email" name="email" required  onChange={handleInputChange} value={input.email} />
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUserForm
