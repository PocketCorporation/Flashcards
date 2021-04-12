import React from "react";
import { Link, useParams} from "react-router-dom";

function NotEnoughCards({length}){
    const { deckId } = useParams()

    return(
        <div>
            <h3>
                Not enough cards. 
            </h3>
            <p>
                You need at least 3 cards to study. There are {length} cards in this deck.
            </p>
            <Link
            to={`/decks/${deckId}/cards/new`}
            className='btn btn-primary'
            title='Add Card'>
            <span className='oi oi-plus' /> Add Cards
            </Link>
        </div>
    )
}

export default NotEnoughCards;