import React from "react";
import { listDecks } from "../utils/api";
// src/utils/api/index.js

listDecks
createDeck
readDeck
updateDeck
deleteDeck

listCards
createCard
readCard
updateCard
deleteCard

const routes = {
    home: "/",
    study: "/decks/:deckId/study",
    createDeck: "/decks/new",
    deck: "/decks/:deckId",
    editDeck: "/decks/:deckId/edit",
    addCard: "/decks/:deckId/cards/new",
    editCard: "/decks/:deckId/cards/:cardId/edit"
   }

     {/*<Route path="/decks/:deckId/study">
            <Study />
          </Route>
           <Route path="/decks/new">
            <NewDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route> 
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route> */}



import React from "react";
import { useParams, useRouteMatch } from 'react-router-dom'

export default function NewDeck(){
    const { deckId } = useParams();
    const { url } = useRouteMatch();

    return (
        <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-primary oi oi-home" aria-current="page"> Home/ <span> Create Deck </span></li>
            </ol>
          </nav>
          <h1>Study : Rendering in React</h1>
          <div className="card-body border rounded">
            <h2>Card 1 of 3</h2>
            <p>Differentiate between Real DOM and Virtual DOM.</p>
            <button className="btn btn-secondary mr-2"> Flip</button>
          </div>
        </div>

        <div className="card">
            <div className="card-body mb-3">
            <h1>Create Deck<span className="float-right lead">cards</span></h1>
            <p>React's component structure allows for quickly building a complex web application that relies on DOM manipulation.</p>
                <button className="btn btn-secondary mr-2"> Cancel</button>
                <button className="btn btn-primary" to={`${url}/${deckId}/study`} >Submit</button>
            </div>
        </div>
        </div>
    )
}