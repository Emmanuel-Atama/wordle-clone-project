import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    console.log('formatting the guess - ', currentGuess)
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
        // only add guess if turn is less than 5
        if (turn > 5) {
          console.log('you used all your guesses!')
          return
        }
        // do not allow duplicate words
        if (history.includes(currentGuess)) {
          console.log('you already tried that word.')
          return
        }
        // check word is 5 chars
        if (currentGuess.length !== 5) {
          console.log('word must be 5 chars.')
          return
        }
        formatGuess()
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};
export default useWordle;
