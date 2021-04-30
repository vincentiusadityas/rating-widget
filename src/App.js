import './App.scss';
import RatingWidget from './components/RatingWidget'
import React, {useState} from 'react'

function App() {

	const [cancelable, setcancelable] = useState(true)
	const [titleDisabled, setTitleDisabled] = useState(false)

	const customTitle = () => {
		return (
			<h2 className="custom-title">
				Fully customized your title, style and all.
			</h2>
		)
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
			<RatingWidget title={"Customized your title and number of stars"} num_of_star={10} />
			<hr></hr>
			<label>
				<input type="checkbox" defaultChecked={cancelable} onChange={() => setcancelable(!cancelable)}/>
				<span>Rating cancelable?</span>
			</label>
			<br></br>
			<label>
				<input type="checkbox" defaultChecked={titleDisabled} onChange={() => setTitleDisabled(!titleDisabled)}/>
				<span>Title disabled?</span>
			</label>
			<RatingWidget title={"Disable your title, make your rating uncancelable"} cancelable={cancelable} titleDisabled={titleDisabled}/>
			<hr></hr>
			<RatingWidget customTitle={customTitle()} />
			<hr></hr>
		</div>
	);
}

export default App;
