import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import RatingStar from './RatingStar'

const INITIAL_MESSAGE = "Please give a rating!"

const RatingCancel = ({cancelable, clickedIdx, handleCancelRating}) => {
    return (
        <>
            {cancelable && clickedIdx !== -1 ?
                <div className='rating-cancel' onClick={handleCancelRating}>
                    <FontAwesomeIcon className='rating-cancel-icon' icon={faTimes} />
                    <span>remove my rating</span>
                </div>
                :
                ''
            }
        </>
    )
}

const RatingMessage = ({customMessages=[], clickedIdx, num_of_star}) => {
    let message = ''
    if (customMessages.length !== 0) {
        message = customMessages[clickedIdx]
    } else {
        if (clickedIdx !== -1) {
            message = `Thanks! You rated this ${clickedIdx+1} out of ${num_of_star} stars.`
            // setRatingMessage(message)
        } else {
            message = INITIAL_MESSAGE
            // setRatingMessage(INITIAL_MESSAGE)
        }
    }
    return (
        <div className='rating-message'>
            <code>{message}</code>
        </div>
    )
}

export default function RatingWidget({ 
    num_of_star=5, 
    title="Rating Widget",
    customTitle=null,
    titleDisabled=false,
    cancelable=true,
    customMessages=[],
}) {

    let num_of_star_ = num_of_star ? parseInt(num_of_star) : 1

    const [filled, setFilled] = useState(Array(num_of_star_).fill(0))
    const [semiFilled, setSemiFilled] = useState(Array(num_of_star_).fill(0))
    const [clickedIdx, setClickedIdx] = useState(-1)
    // const [ratingMessage, setRatingMessage] = useState(INITIAL_MESSAGE)

    const handleMouseEnter = (idx) => {
        const newFilled = []
        for (var i=0; i<=idx; i++) {
            newFilled.push(1)
        }
        setSemiFilled(newFilled)
    }

    const handleMouseLeave = () => {
        setSemiFilled(Array(num_of_star_).fill(0))
    }

    const handleClicked = (idx) => {
        const newFilled = []
        for (var i=0; i<=idx; i++) {
            newFilled.push(1)
        }
        setFilled(newFilled)
        setClickedIdx(idx)

    }

    const handleCancelRating = () => {
        setFilled(Array(num_of_star_).fill(0))
        setClickedIdx(-1)
    }

    // const handleRatingMessage = (idx) => {
    //     let message = ''
    //     if (idx !== -1) {
    //         message = `Thanks! You rated this ${idx+1} out of ${num_of_star_} stars.`
    //         // setRatingMessage(message)
    //     } else {
    //         message = INITIAL_MESSAGE
    //         // setRatingMessage(INITIAL_MESSAGE)
    //     }
    //     return (
    //         <div className='rating-message'>
    //             <code>{message}</code>
    //         </div>
    //     )
    // }

    useEffect(() => {
        if (clickedIdx >= num_of_star_) {
            handleClicked(num_of_star_-1)
        }
    }, [num_of_star_, clickedIdx])

    return (
		<div>
            {titleDisabled ? ''
                :
                customTitle ? customTitle : <h1>{title}</h1>
            }
			<RatingStar 
                num_of_star={num_of_star_} 
                cancelable={cancelable}
                filled={filled}
                semiFilled={semiFilled}
                // clickedIdx={clickedIdx}
                handleClicked={handleClicked}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                // handleCancelRating={handleCancelRating}
            />
            <RatingMessage
                clickedIdx={clickedIdx}
                num_of_star={num_of_star_}
                customMessages={customMessages}
            />
            <RatingCancel 
                cancelable={cancelable} 
                clickedIdx={clickedIdx}
                handleCancelRating={handleCancelRating}
            />
		</div>
    )

}