import './App.scss';
import RatingWidget from './components/RatingWidget'
import React, {useState} from 'react'

function App() {

	const [cancelable, setcancelable] = useState(true)
	const [titleDisabled, setTitleDisabled] = useState(false)
	const [title, setTitle] = useState("Customized your title and number of stars")
	const [numberOfStars, setNumberOfStars] = useState(10)

	const customTitle = () => {
		return (
			<h2 className="custom-title">
				Create your own title component
			</h2>
		)
	}

	const handleNumberChange = (e) => {
		// let number = e.target.value ? parseInt(e.target.value) : 1
		setNumberOfStars(e.target.value)
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					This is an example of a rating widget | <code>{'<RatingWidget />'}</code>
				</p>
			</header>

			<RatingWidget />
			<hr></hr>

			<label>
				{"Input your title: "}
				<input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
			</label>
			<br></br>
			<label>
				{"Number of stars: "}
				<input type="number" min="1" max="50" defaultValue={numberOfStars} onChange={(e) => handleNumberChange(e)}/>
			</label>
			<br></br>
			<label>
				<input type="checkbox" defaultChecked={cancelable} onChange={() => setcancelable(!cancelable)}/>
				<span>Rating cancelable?</span>
			</label>
			<br></br>
			<label>
				<input type="checkbox" defaultChecked={titleDisabled} onChange={() => setTitleDisabled(!titleDisabled)}/>
				<span>Title disabled?</span>
			</label>
			<RatingWidget num_of_star={numberOfStars} title={title} cancelable={cancelable} titleDisabled={titleDisabled}/>
			<hr></hr>
			
			<RatingWidget customTitle={customTitle()} />
			<hr></hr>
		</div>
	);
}

export default App;
