import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }, []);

  return (
    <div>
      <h1>Industry Weapon Applicant Test</h1>
    </div>
  );
};
export default App;
