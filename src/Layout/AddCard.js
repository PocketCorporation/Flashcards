import React, { useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddDeck(){
    
    const [deck, setDeck] = useState(null)
    const { deckId } = useParams()
    const history = useHistory()

    const getDeck = async() => {
        const deck = await readDeck(deckId)
       setDeck(deck)
    }

    useEffect(() => {
        getDeck()
               // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const handleSubmit = (card) => {
        createCard(deckId, card).then(
        history.push(`/decks/${deckId}`)).catch(err => console.log(err))
    }
    return(
        <>
         {deck && <div>
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
                Add Card
              </li>
            </ol>
          </nav>
          <h1>{deck.name}: Add Card</h1>
          <CardForm onSubmit={handleSubmit}/>
          </div>}
        </>
    )
}

export default AddDeck;