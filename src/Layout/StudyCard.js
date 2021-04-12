import React , { useState }from "react";

function StudyCard({ currentCardNumber, card, handleNext, length}){
    const [isFlipped, setIsFlipped] = useState(false)
    const handleFlip = ()=> {
        setIsFlipped(!isFlipped)
    }
    return(
        <div className="card mt-2 ">
            <div className="card-body">
                <h4 className="card-title">
                    Card {currentCardNumber + 1} of {length}
                </h4>
                <p className="card-text">
                     { isFlipped ? card.back : card.front }
                </p>
                <button className="btn btn-secondary mr-2" onClick={handleFlip}>
                    Flip
                </button>   
                {isFlipped &&<button className="btn btn-primary" onClick={handleNext}>
                    Next
                </button>}
            </div>
        </div>
    )
}

export default StudyCard;