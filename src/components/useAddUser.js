import  {useState} from 'react';
const useAddUserForm = (cb) => {
  const [input, setInput] = useState({});

  const hSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if(!input.name.includes(" ")){
      alert("Please include a first and last name")
      return;
    }
    cb();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInput(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    hSubmit,
    handleInputChange,
    input
  };
}
export default useAddUserForm;