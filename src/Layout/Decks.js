import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

function Decks() {
  const [decks, setDecks] = useState([]);
 
  const abort = new AbortController();
  useEffect(() => {
    listDecks(abort.signal).then(setDecks).catch(console.log);

    return () => abort.abort();
           // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteHandler = async (deckId) => {
    console.log(deckId,"deckId")
		const confirmed = window.confirm(
			'Delete this deck?\n\nYou will not be able to recover it.'
		);
		if (confirmed) {
			await deleteDeck(deckId)
      const decks = await listDecks()
      setDecks(decks)
		}
	}


  return (
    <Fragment>
      <div>
      <Link className="btn btn-secondary mb-2" to={`/decks/new`}><span class="oi oi-plus"></span> Create Deck</Link>

      </div>
      {decks.map((deck, index) => (
        <div className="card" key={index + 1}>
          <div className="card-body mb-3">
            <h1>
              {deck.name}
              <span className="float-right lead">
                {deck.cards ? <small>{deck.cards.length} cards</small> : null}
              </span>
            </h1>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
              <span className="oi oi-eye"></span> View
            </Link> 
            <Link to={`/decks/${deck.id}/study`}className="btn btn-primary">
              <span className="oi oi-book"></span> Study
            </Link>
            <button className='btn btn-danger float-right'
                    title='Delete deck'
                    onClick={() => deleteHandler(deck.id)}>
              <span className='oi oi-trash' />
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default Decks;
