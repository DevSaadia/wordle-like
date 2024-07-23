import React from 'react'
import Tile from './Tile'

interface GuessProps {
    id: number;
    guess: string;
    correctWord: string;
}
const Guess: React.FC<GuessProps> = ({ id, guess, correctWord }) => {
    const getLetterStatus = (letter: string, index: number): 'correct' | 'present' | 'unguessed' => {
        if (correctWord[index] === letter) {
            return 'correct';
        } else if (correctWord.includes(letter)) {
            return 'present';
        } else {
            return 'unguessed';
        }
    };

    return (
        <div className='flex flex-row gap-2'>

            {guess.split('').map((letter: string, index: number) => <Tile key={index} letterStatus={getLetterStatus(letter, index)} letter={letter} />
            )}
            {/* <Tile letterStatus={'unguessed'} />
            <Tile letterStatus={'unguessed'} />
            <Tile letterStatus={'unguessed'} />
            <Tile letterStatus={'unguessed'} />
            <Tile letterStatus={'unguessed'} /> */}
        </div>
    )
}

export default Guess