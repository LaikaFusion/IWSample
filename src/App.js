import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
				
				data.sort(function (a,b){
					return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
				});
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Industry Weapon Applicant Test</h1>
    </div>
  );
};
export default App;
