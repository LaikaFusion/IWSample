import React, { useEffect, useState } from "react";
import NameDisplay from "./components/NameDisplay";
import AddUserForm from "./components/AddUserForm";
import "./App.css";

const sortByName = (a, b) => {
	//sorts by name value of an array of objects, case insensitive 
  return a.name.toUpperCase() > b.name.toUpperCase()
    ? 1
    : b.name.toUpperCase() > a.name.toUpperCase()
    ? -1
    : 0;
};

const App = () => {
  const [fullDetailsArray, setFDArr] = useState([]);
  const [displayArr, setDispArr] = useState([]);
  const [displayCursorInt, setCurInt] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.sort(sortByName);
				setFDArr(data);
				//this will set the intial 5 objects displayed
        changePageDisp(data, "next");
      });
  }, []);

  const changePageDisp = (dataArr, directionStr) => {
    if (!dataArr) {
      return;
    }
    let incrimentedCursor;
    if (directionStr === "next") {
			//detects if user is attempting to next past the end, should be impossible to see the button
      if (dataArr.length / 5 <= displayCursorInt / 5) {
        return;
      }
      incrimentedCursor = displayCursorInt + 5;
      setDispArr(dataArr.slice(displayCursorInt, incrimentedCursor));
    } else {
      if (displayCursorInt - 5 <= 0) {
        return;
      }
      incrimentedCursor = displayCursorInt - 5;
      setDispArr(dataArr.slice(incrimentedCursor - 5, incrimentedCursor));
    }
    setCurInt(incrimentedCursor);
  };

  const addUser = (nameStr, emailStr) => {
    const newArr = [...fullDetailsArray];
    newArr.push({ name: nameStr, email: emailStr });
    newArr.sort(sortByName);
		setFDArr(newArr);
		//do not want display cursor to move from this change
    setDispArr(newArr.slice(displayCursorInt - 5, displayCursorInt));
  };

  return (
    <div className="container">
      <h1>Industry Weapon Applicant Test</h1>
			<div className="nameCont">{displayArr.map(e => {
        return <NameDisplay key={e.id} userObj={e} />;
      })}</div>
      
      <div className="buttonRow">
        <button
          style={displayCursorInt === 5 ? { visibility: "hidden" } : {}}
          onClick={() => {
            changePageDisp(fullDetailsArray, "prev");
          }}
        >
          Previous
        </button>
        <button
          style={
            fullDetailsArray.length / 5 <= displayCursorInt / 5
              ? { visibility: "hidden" }
              : {}
          }
          onClick={() => {
            changePageDisp(fullDetailsArray, "next");
          }}
        >
          Next
        </button>
      </div>

      <AddUserForm addUser={addUser} />
    </div>
  );
};
export default App;
