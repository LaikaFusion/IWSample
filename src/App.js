import React, { useEffect, useState } from "react";
import NameDisplay from "./components/NameDisplay";
import AddUserForm from "./components/AddUserForm";

const sortByName = (a,b) =>{
	return a.name.toUpperCase() > b.name.toUpperCase()  ? 1 : b.name.toUpperCase()  > a.name.toUpperCase()  ? -1 : 0;

}

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
        changePageDisp(data, "next");
      });
  }, []);

  const changePageDisp = (dataArr, directionStr) => {
    if (!dataArr) {
      return;
    }
    let incrimentedCursor;
    if (directionStr === "next") {
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
	
	const addUser = (nameStr,emailStr) =>{
		const newArr = [...fullDetailsArray];
		newArr.push({"name":nameStr,"email":emailStr});
		newArr.sort(sortByName);
		setFDArr(newArr)
		setDispArr(newArr.slice(displayCursorInt -5, displayCursorInt));

	}

  return (
    <div>
      <h1>Industry Weapon Applicant Test</h1>
      {displayArr.map(e => {
        return <NameDisplay key={e.id} userObj ={e}/>
      })}
      <button
        style={displayCursorInt === 5 ? { visibility: "hidden" } : {}}
        onClick={() => {
          changePageDisp(fullDetailsArray, "prev");
        }}
      >
        Previous
      </button>
      <button
        style={(fullDetailsArray.length / 5 <= displayCursorInt / 5) ? { visibility: "hidden" } : {}}
        onClick={() => {
          changePageDisp(fullDetailsArray, "next");
        }}
      >
        Next
      </button>
			<AddUserForm addUser={addUser} />
    </div>
  );
};
export default App;
