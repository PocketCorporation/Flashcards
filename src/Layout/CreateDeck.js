import React from "react";
import { Link } from 'react-router-dom'
import Form from "./Form";
import { createDeck } from "../utils/api";

export default function CreateDeck(){

    const handleCreate = (deck) => {
      console.log(deck,"deck")
      createDeck(deck);

    
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
                Create Deck
              </li>
            </ol>
          </nav>
          <h1>Create Deck</h1>
          <Form  onSubmit={handleCreate} />
        </>
      )    
}

