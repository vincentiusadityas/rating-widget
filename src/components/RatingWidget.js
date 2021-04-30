import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import RatingStar from './RatingStar'

const INITIAL_MESSAGE = "Please give a rating!"

export default function RatingWidget({ 
    num_of_star=5, 
    title="Rating Widget",
    customTitle=null,
    titleDisabled=false,
    cancelable=true,
}) {

    const [filled, setFilled] = useState(Array(num_of_star).fill(0))
    const [semiFilled, setSemiFilled] = useState(Array(num_of_star).fill(0))
    const [clickedIdx, setClickedIdx] = useState(null)
    const [ratingMessage, setRatingMessage] = useState(INITIAL_MESSAGE)

    const handleMouseEnter = (idx) => {
        const newFilled = []
        for (var i=0; i<=idx; i++) {
            newFilled.push(1)
        }
        setSemiFilled(newFilled)
    }

    const handleMouseLeave = () => {
        setSemiFilled(Array(num_of_star).fill(0))
    }

    const handleClicked = (idx) => {
        const newFilled = []
        for (var i=0; i<=idx; i++) {
            newFilled.push(1)
        }
        setFilled(newFilled)
        setClickedIdx(idx)

        const message = `Thanks! You rated this ${idx+1} out of ${num_of_star} stars.`
        setRatingMessage(message)
    }

    const handleCancelRating = () => {
        setFilled(Array(num_of_star).fill(0))
        setClickedIdx(null)
        setRatingMessage(INITIAL_MESSAGE)
    }

    return (
		<div>
            {titleDisabled ? ''
                :
                customTitle ? customTitle : <h1>{title}</h1>
            }
			<RatingStar 
                num_of_star={num_of_star} 
                cancelable={cancelable}
                filled={filled}
                semiFilled={semiFilled}
                clickedIdx={clickedIdx}
                handleClicked={handleClicked}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleCancelRating={handleCancelRating}
            />
            <div className='rating-message'>
                <code>{ratingMessage}</code>
            </div>
            {cancelable && clickedIdx !== null ?
                <div className='rating-cancel' onClick={handleCancelRating}>
                    <FontAwesomeIcon className='rating-cancel-icon' icon={faTimes} />
                    <span>remove my rating</span>
                </div>
                :
                ''
            }
		</div>
    )

}