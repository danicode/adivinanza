import React, { useState } from 'react';

import './styles.css';

export const Form = ({ onGuess, gameOver }) => {

  const [ guess, setGuess ] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = ( event ) => {
    event.preventDefault();
    onGuess(guess);
    setGuess('');
  };

  return (
    <div id="form-wrapper">
      <form id="guess-form" name="guess-form" onSubmit={ handleGuessSubmit }>
        <input
          id="guess"
          name="guess"
          type="text"
          value={ guess }
          onChange={ handleGuessChange }
          disabled={ gameOver }
        />
        <button id="send" disabled={ gameOver }>Probar</button>
      </form>
    </div>
  );
}
