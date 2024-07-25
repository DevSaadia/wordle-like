'use client'
import React, { useState } from 'react'
import Guess from './Guess'
import Tile from './Tile';
import { Words } from '../utilities/Words';

const Wordle = () => {

    //const [guessedWords, setguessedWords] = useState(['', '', '', '', '', '']);
    // let guessedWords = ['', '', '', '', '', ''];

    const [guessedWords, setGuessedWords] = useState<string[]>(["", ""]);
    // console.log(guessedWords);
    const [guessedWord, setGuessedWord] = useState('');
    const [gameOver, setGameOver] = useState(false);
    // const word = 'TAXIS';
    const word = Words[Math.floor(Math.random() * Words.length)].toUpperCase();
    const [guessCount, setGuessCount] = useState(1);
    const [winStatus, setWinStatus] = useState(false);

    const maxGuesses = 6;

    const checkGuess = (): void => {


        if (guessedWords.includes(guessedWord)) {
            alert('You already guessed this word');
            return;
        }
        if (guessedWord.length !== word.length) {
            alert('Please enter a word of length 5');
            return;
        }

        setGuessCount(guessCount + 1);
        console.log("guesscount is" + guessCount);

        console.log("guessed word is" + guessedWord);
        console.log(word);
        console.log(guessedWord === word);
        if (guessCount === maxGuesses) {
            setGameOver(true);
        }
        setGuessedWords([...guessedWords, guessedWord]);
        if (guessedWord === word) {
            setGameOver(true);
            setWinStatus(true);
        }

        setGuessedWord('');
    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='bg-slate-600 text-slate-50 text-center p-4 text-4xl'>Wordle-Like by Saadia</h1>
            <br />
            {guessCount == 1 && <><p>Type in a 5 letter word and press enter to play</p><br /></>}

            <div className='flex-col flex items-center justify-center w-1/2 '>
                <div className='w-96 h-96 border items-center flex-col flex border-black pt-2'>
                    {guessedWords.map((guess: string, index: React.Key | null | undefined) => (<Guess key={index} correctWord={word} guess={guess} id={0} />))}
                </div >

                {gameOver && <h2>Game Over</h2>}
                {winStatus ? (<h2>You Win!</h2>) : (gameOver && <p className='text-black'>The word was {word}</p>)}


                <div className='' >
                    <input

                        id='user-input'
                        type='text'
                        placeholder='Enter your guess here...'
                        value={guessedWord.toUpperCase()}
                        onChange={(e) => setGuessedWord(e.target.value.toUpperCase())}
                        className='border border-black mt-8 rounded p-2 w-full text-blue-700'
                    />
                    <button
                        onClick={() => checkGuess()}
                        className='border border-black mt-4 rounded p-2 w-full text-white bg-green-600 hover:bg-green-800 disabled:bg-slate-400'
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