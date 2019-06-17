import React from 'react'

const NameDisplay =(props)=> {
  const {name} = props.userObj;
  return (
    <div>
      {name}
    </div>
  )
}
export default NameDisplay