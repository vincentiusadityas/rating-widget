// import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './RatingStar.scss'

// const INITIAL_MESSAGE = "Please give a rating!"

export default function RatingStar({ 
    num_of_star=5, 
    filled, 
    semiFilled,
    ratingMessage,
    // clickedIdx,
    handleMouseEnter,
    handleMouseLeave,
    handleClicked,
    // handleCancelRating
}) {

    // const [filled, setFilled] = useState(Array(num_of_star).fill(0))
    // const [semiFilled, setSemiFilled] = useState(Array(num_of_star).fill(0))
    // const [clickedIdx, setClickedIdx] = useState(null)
    // const [ratingMessage, setRatingMessage] = useState(INITIAL_MESSAGE)

    // const handleMouseEnter = (idx) => {
    //     const newFilled = []
    //     for (var i=0; i<=idx; i++) {
    //         newFilled.push(1)
    //     }
    //     setSemiFilled(newFilled)
    // }

    // const handleMouseLeave = () => {
    //     setSemiFilled(Array(num_of_star).fill(0))
    // }

    // const handleClicked = (idx) => {
    //     const newFilled = []
    //     for (var i=0; i<=idx; i++) {
    //         newFilled.push(1)
    //     }
    //     setFilled(newFilled)
    //     setClickedIdx(idx)

    //     const message = `Thanks! You rated this ${idx+1} out of ${num_of_star} stars.`
    //     setRatingMessage(message)
    // }

    // const handleCancelRating = () => {
    //     setFilled(Array(num_of_star).fill(0))
    //     setClickedIdx(null)
    //     setRatingMessage(INITIAL_MESSAGE)
    // }

    return(
        <>
            <div className='rating-stars'>
                {Array(num_of_star).fill(1).map((i, idx) => {
                    const isFilled = filled[idx] ? 'star-icon-filled' : ''
                    const isSemiFilled = semiFilled[idx] ? 'star-icon-semi-filled' : 'star-icon'
                    return (
                        <FontAwesomeIcon 
                            className={['a-star', isFilled, isSemiFilled].join(' ')} 
                            // className={'star-icon'}
                            icon={faStar} 
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClicked(idx)}
                            key={idx}
                        />
                    )
                })}
            </div>
            {/* <div className='rating-message'>
                <code>{ratingMessage}</code>
            </div>
            {clickedIdx !== null ?
                <div className='rating-cancel' onClick={handleCancelRating}>
                    <FontAwesomeIcon className='rating-cancel-icon' icon={faTimes} />
                    <span>remove my rating</span>
                </div>
                :
                ''
            } */}
        </>
    )
}