import React from 'react'
import styles from './HangmanWord.module.scss'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

const HangmanWord: React.FC<HangmanWordProps> = ({
    guessedLetters,
    wordToGuess,
    reveal = false,
}) => {
    return (
        <div className={styles.container}>
            {wordToGuess.split('').map((letter, index) => (
                <span key={index} style={{ borderBottom: '.1em solid black' }}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? 'visible'
                                    : 'hidden',
                            color:
                                !guessedLetters.includes(letter) && reveal
                                    ? 'red'
                                    : 'black',
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
