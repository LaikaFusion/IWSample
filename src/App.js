import React, { useEffect, useState } from "react";

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
        data.sort(function(a, b) {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        });
        setFDArr(data);
        changePageDisp(data, "next");
      });
  }, []);

  const changePageDisp = (dataArr, directionStr) => {
		if(!dataArr[displayCursorInt]){
			return
		}
		const incrimentedCursor = displayCursorInt+5;
		setDispArr(dataArr.slice(displayCursorInt , incrimentedCursor));
		setCurInt(incrimentedCursor);

  };

  return (
    <div>
      <h1>Industry Weapon Applicant Test</h1>
			{displayArr.map(e=>{
				console.log(e)
				return (<div>{e.name}</div>)
			})}
    </div>
  );
};
export default App;
