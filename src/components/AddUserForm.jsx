import React from 'react'

const AddUserForm = ()=> {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="test" name="name" required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUserForm
