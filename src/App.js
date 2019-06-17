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
				data.push( {
					"id": 1,
					"name": "Leanne Graham",
					"username": "Bret",
					"email": "Sincere@april.biz",
					"address": {
						"street": "Kulas Light",
						"suite": "Apt. 556",
						"city": "Gwenborough",
						"zipcode": "92998-3874",
						"geo": {
							"lat": "-37.3159",
							"lng": "81.1496"
						}
					},
					"phone": "1-770-736-8031 x56442",
					"website": "hildegard.org",
					"company": {
						"name": "Romaguera-Crona",
						"catchPhrase": "Multi-layered client-server neural-net",
						"bs": "harness real-time e-markets"
					}
				},)
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

  return (
    <div>
      <h1>Industry Weapon Applicant Test</h1>
      {displayArr.map(e => {
        return <div>{e.name}</div>;
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
    </div>
  );
};
export default App;
