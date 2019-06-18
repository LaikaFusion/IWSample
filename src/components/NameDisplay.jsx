import React from 'react'

const NameDisplay =(props)=> {
  const {name,email} = props.userObj;
  const bizCheck = ()=>{
    if(email.includes(".biz")){
      return {color:"green"}
    }
    else{
      return {}
    }
  }
  return (
    <div className="nameLine" style = {bizCheck()}>
      {name}
    </div>
  )
}
export default NameDisplay