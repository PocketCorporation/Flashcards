import React from "react";
import { deleteCard } from "../utils/api";
import { Link, useParams } from "react-router-dom";


export default function CardsList({ cards, getDecks }) {
    const { deckId } = useParams()
    
  const handleDelete = async (cardId) => {
    console.log(cardId,"cardId")
		const confirmed = window.confirm(
			'Delete this card?\n\nYou will not be able to recover it.'
		);
		if (confirmed) {
			await deleteCard(cardId)
            await getDecks()
		}
	}

  return (
    <>
      {cards.length > 0 && cards.map((card, index) => {
        return (
          <div className="card">
            <div className="card-body">
              <div className="col-12 row">
                <div className="col-6">{card.front}</div>
                <div className="col-6">{card.back}</div>
              </div>
              <div className="float-right">
              <Link
                to={`/decks/${deckId}/cards/${card.id}/edit`}
                className="btn btn-secondary mr-2 "
                title="Edit deck"
              >
                <span className="oi oi-pencil" /> Edit
              </Link>
              <button
                className="btn btn-danger "
                title="Delete deck"
              >
                <span className="oi oi-trash" onClick={()=> handleDelete(card.id)} />
              </button>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
}
