'use client'
import React, { useState } from 'react'
import Guess from './Guess'
import Tile from './Tile';

const Wordle = () => {

    //const [guessedWords, setguessedWords] = useState(['', '', '', '', '', '']);
    // let guessedWords = ['', '', '', '', '', ''];

    const [guessedWords, setGuessedWords] = useState<string[]>(["", ""]);
    // console.log(guessedWords);
    const [guessedWord, setGuessedWord] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const word = 'TAXIS';
    const [guessCount, setGuessCount] = useState(0);
    const [winStatus, setWinStatus] = useState(false);

    const maxGuesses = 6;

    const checkGuess = (): void => {
        if (guessedWord.length !== word.length) {
            alert('Please enter a word of length 5');
            return;
        }
        setGuessedWords([...guessedWords, guessedWord]);
        setGuessCount(guessCount + 1);
        console.log(guessCount);
        console.log("guessed word is" + guessedWord);
        console.log(word);
        console.log(guessedWord === word);
        if (guessCount === maxGuesses) {
            setGameOver(true);
        }
        if (guessedWord === word) {
            setGameOver(true);
            setWinStatus(true);

        }


    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='bg-slate-600 text-slate-50 text-center p-4 text-4xl'>Wordle-Like by Saadia</h1>
            <br />
            <div className='flex-col flex items-center justify-center w-1/2'>
                <div className='w-96 h-96 border items-center flex-col flex border-black'>
                    {guessedWords.map((guess: string, index: React.Key | null | undefined) => (<Guess key={index} correctWord={word} guess={guess} id={0} />))}
                </div >

                {gameOver && <h2>Game Over</h2>}
                {winStatus && <h2>You Win!</h2>}

                <div >
                    <input

                        id='user-input'
                        type='text'
                        placeholder='Enter your guess here'
                        value={guessedWord.toUpperCase()}
                        onChange={(e) => setGuessedWord(e.target.value.toUpperCase())}
                        className='border border-black mt-8 rounded p-2'
                    />
                    <button
                        onClick={() => checkGuess()}
                        className='border border-black mt-4 rounded ml-8 p-2 disabled:bg-slate-400'
                        disabled={gameOver}

                    >
                        Submit
                    </button>

                </div>
            </div >
        </div>

    )
}

export default Wordle