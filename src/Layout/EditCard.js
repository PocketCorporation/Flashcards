import React , { useState, useEffect} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { updateCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function EditCard() {
    const [deck, setDeck] = useState(null)
    const history = useHistory()
    const { cardId, deckId } = useParams()

    const handleSubmit = async (card)=> {
        await updateCard(card)
        history.push(`/decks/${deckId}`)
    }
    const getDeck = async() => {
        const deck = await readDeck(deckId)
       setDeck(deck)
    }
    useEffect(() => {
        getDeck()
               // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    return(
        <>
          {deck &&<div>
             <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>
                  <span className='oi oi-home' /> Home
                </Link>
              </li>
              <li className='breadcrumb-item'>
                <Link to={`/decks/${deck.id}`}>
                  <span  /> {deck.name}
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Edit Card {cardId}
              </li>
            </ol>
          </nav>
          <h1>{deck.name}: Edit Card</h1>
          <CardForm onSubmit={handleSubmit} cardType={"edit"}/>
          </div>}
        </>
    )
}

export default EditCard;