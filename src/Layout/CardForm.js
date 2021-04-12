import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readCard } from "../utils/api";

function CardForm({ onSubmit, cardType }) {
	const [card, setCard] = useState({ front: '', back: '' });
    const { cardId, deckId } = useParams()
	
	function changeHandler({ target: { name, value } }) {
		setCard((prevState) => ({
			...prevState,
			[name]: value
		}));
	}

	const getCard = async() => {
        const card = await readCard(cardId)
       setCard(card)
    }

    useEffect(() => {
		if (cardType === "edit"){
			getCard()
		}
              // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
   

	const submitHandler = (event) => {
		event.preventDefault();
		onSubmit(card);
	}

	return (
		<>
			<form onSubmit={submitHandler} className='card-form'>
				<fieldset>
					<div className='form-group'>
						<label htmlFor='front'>Front</label>
						<textarea
							id='front'
							name='front'
							className='form-control'
							rows='4'
							required={true}
							placeholder='Front side of card'
							value={card.front}
							onChange={changeHandler}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='back'>Back</label>
						<textarea
							id='back'
							name='back'
							className='form-control'
							rows='4'
							required={true}
							placeholder='Back side of card'
							value={card.back}
							onChange={changeHandler}
						/>
					</div>
					<Link to={`/decks/${deckId}`}
						type='button'
						className='btn btn-secondary mr-2'
						>
						Cancel
					</Link>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</fieldset>
			</form>
		</>
	);
}


export default CardForm;