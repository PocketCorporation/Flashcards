import React from "react";

export default function Study(){
    return(
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-primary oi oi-home" aria-current="page"> Home/ <span> Renering in React </span> / <span> Study </span></li>
            </ol>
          </nav>
          <h1>Study : Rendering in React</h1>
          <div className="card-body border rounded">
            <h2>Card 1 of 3</h2>
            <p>Differentiate between Real DOM and Virtual DOM.</p>
            <button className="btn btn-secondary mr-2"> Flip</button>
          </div>
        </div>
    )
}