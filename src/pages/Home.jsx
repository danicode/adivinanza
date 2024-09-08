import React, { useState, useEffect } from 'react';
import { Layout } from '../layouts/Layout';
import { Form } from '../components/Form/Form';
import { Score } from '../components/Score/Score';
import { Result } from '../components/Result/Result';
import { Message } from '../components/Message/Message';

export const Home = () => {

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
  }

  const [ targetNumber, setTargetNumber ] = useState(generateRandomNumber());
  const [ score, setScore ] = useState(20);
  const [ highScore, setHighScore ] = useState(0);
  const [ message, setMessage ] = useState('');
  const [ hintText, setHintText ] = useState('¡Pista!');
  const [ result, setResult ] = useState('?');
  const [ gameOver, setGameOver ] = useState(false);
  const [ isWinner, setIsWinner ] = useState(false);

  useEffect(() => {
    if (gameOver) {
      document.body.classList.add(isWinner ? 'winner' : 'loser');
    } else {
      document.body.classList.remove('winner', 'loser');
    }
  }, [ gameOver ]);

  const handleGuess = ( guess ) => {
    const numericGuess = parseInt(guess);

    if (validation(numericGuess)) {
      if (numericGuess === targetNumber) {
        setHintText('¡Número correcto!');
        setMessage('¡Felicidades! Adivinaste el número🎉');
        launchConfetti();
        setResult(targetNumber);
        if (score > highScore) {
          setHighScore(score);
        }
        setIsWinner(true);
        setGameOver(true);
      } else if (numericGuess > targetNumber) {
        setHintText('¡Muy Alto!');
        decreaseScore();
      } else {
        setHintText('¡Muy bajo!');
        decreaseScore();
      }
    }
  };

  const validation = ( numericGuess ) => {
    if (isNaN(numericGuess)) {
      setHintText('¡Debe ingresar un valor numérico!');
      return false;
    }

    if (numericGuess < 1 || numericGuess > 20) {
      setHintText('¡Debe ingresar un valor entre 1 y 20!');
      return false;
    }
    return true;
  }

  const decreaseScore = () => {
    if (score > 1) {
      setScore(score - 1);
    } else {
      setScore(score - 1);
      setHintText('');
      setMessage(`Has agotado tus intentos. El número correcto era ${ targetNumber }.`);
      sadConfetti();
      setGameOver(true);
      setIsWinner(false);
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setScore(20);
    setHintText('¡Pista!');
    setResult('?');
    setMessage('');
    setGameOver(false);
    setIsWinner(false);
  };

  return (
    <Layout gameOver={ gameOver } handleReset={ handleReset }>
      <>
        <Result value={ result } />
        <div id="container">
          <Form onGuess={ handleGuess } gameOver={ gameOver } />
          <Score score={ score } highScore={ highScore } hintText={ hintText } />
        </div>
        <Message value={ message } />
      </>
    </Layout>
  );
};
