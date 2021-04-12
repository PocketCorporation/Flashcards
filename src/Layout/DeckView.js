import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
import CardsList from "./CardsList";

function DeckView(){
    const { deckId } = useParams()
    const history = useHistory()
    const [deck, setDeck] = useState(null)
    const getDeck = async() => {
        const deck = await readDeck(deckId)
       setDeck(deck)
    }
    useEffect(() => {
        getDeck()
               // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
      const handleDelete = async () => {
        console.log(deckId,"deckId")
            const confirmed = window.confirm(
                'Delete this deck?\n\nYou will not be able to recover it.'
            );
            if (confirmed) {
                await deleteDeck(deckId)
                history.push(`/`)
            }
        }

      console.log(deck,"deck")
      return (
          <>
        {deck && <main className='container deck-view'>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to='/'>
                        <span className='oi oi-home' /> Home
                    </Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                    {deck.name}
                </li>
            </ol>
        </nav>
        <div className='media mb-2'>
            <div className='media-body'>
                <h5 className='mt-0'>{deck.name}</h5>
                {deck.description}
            </div>
        </div>
        <Link
            to={`/decks/${deck.id}/edit`}
            className='btn btn-secondary mr-2'
            title='Edit deck'>
            <span className='oi oi-pencil' /> Edit
        </Link>
        <Link
            to={`/decks/${deck.id}/study`}
            className='btn btn-primary mr-2'
            title='Study deck'>
            <span className='oi oi-book' /> Study
        </Link>
        <Link
            to={`/decks/${deck.id}/cards/new`}
            className='btn btn-primary'
            title='Add Card'>
            <span className='oi oi-plus' /> Add Cards
        </Link>
        <button className='btn btn-danger float-right' title='Delete deck'>
            <span className='oi oi-trash' onClick={handleDelete} />
        </button>
        <h3 className="mt-3">Cards</h3>
        <CardsList cards={deck.cards} getDecks={getDeck}/>

    </main>}
    </>
      )
}

export default DeckView