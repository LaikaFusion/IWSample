import React,{useEffect} from "react"

const App = () => {
	useEffect(() => console.log('mounted'), []);

	return (
		<div>
			<h1>Industry Weapon Applicant Test</h1>
		</div>
	)
}
export default App
