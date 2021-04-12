import React from "react";
import { updateDeck } from "../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";
import Form from "./Form";

function EditDeck(){
    const history = useHistory()
    const { deckId } = useParams()

    const handleSubmit = async (deck)=> {
        await updateDeck(deck)
        history.push(`/decks/${deckId}`)
    }

    return (
        <>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>
                  <span className='oi oi-home' /> Home
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Edit Deck
              </li>
            </ol>
          </nav>
          <h1>Edit Deck</h1>
          <Form  onSubmit={handleSubmit} deckType={"edit"} />
        </>
      )
}

export default EditDeck;