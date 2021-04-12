import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

function DeckStudy() {
  const [deck, setDeck] = useState(null);
  const [currentCardNumber, setCurrentCardNumber] = useState(0);
  const { deckId } = useParams();
  const history = useHistory();
  const handleNext = () => {
    if (currentCardNumber + 1 === deck.cards.length) {
      const confirmed = window.confirm(
        "Reset Cards?\n\nClick 'cancel' to return to the home page."
      );
      if (confirmed) {
        setCurrentCardNumber(0);
      } else {
        history.push(`/`);
      }
    } else {
      setCurrentCardNumber(currentCardNumber + 1);
    }
  };

  const getDeck = async () => {
    const deck = await readDeck(deckId);
    setDeck(deck);
  };

  useEffect(() => {
    getDeck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {deck && (
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <span className="oi oi-home" /> Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/decks/${deck.id}`}>
                  <span /> {deck.name}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Study
              </li>
            </ol>
          </nav>
          <h1>{deck.name}: Study</h1>
          {deck.cards.length > 2 ? 
          <StudyCard
            currentCardNumber={currentCardNumber}
            card={deck.cards[currentCardNumber]}
            length={deck.cards.length}
            handleNext={handleNext}
          /> :
          <NotEnoughCards length={deck.cards.length} />}
        </div>
      )}
    </>
  );
}

export default DeckStudy;
