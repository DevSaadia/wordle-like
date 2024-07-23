import React from 'react'

interface TileProps {
    letterStatus: 'unguessed' | 'correct' | 'present';
    letter: string;
}

const Tile: React.FC<TileProps> = ({ letterStatus, letter }) => {
    // console.log(letterStatus);
    const statusToColorClass = {
        unguessed: 'bg-unguessed',
        correct: 'bg-correct',
        present: 'bg-present',
    };
    return (

        <div className={`w-12 h-12 mb-4 border flex justify-center items-center border-black ${statusToColorClass[letterStatus]}`}>
            {letter}
        </div>
    )
}

export default Tile