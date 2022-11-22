import { useCallback, useEffect, useState } from 'react'
import HangmanBanner from './components/hangman-banner/HangmanBanner'
import HangmanDrawing from './components/hangman-drawing/HangmanDrawing'
import HangmanWord from './components/hangman-word/HangmanWord'
import Keyboard from './components/keyboard/Keyboard'
import words from './wordsList.json'
import styles from './App.module.scss'

const getWord = () => words[Math.floor(Math.random() * words.length)]

function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord())
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const inccorectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    )

    const isLoser = inccorectLetters.length >= 6
    const isWinner = wordToGuess
        .split('')
        .every((letter) => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return
            setGuessedLetters((currentLetters) => [...currentLetters, letter])
        },
        [guessedLetters, isLoser, isWinner]
    )

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return
            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener('keypress', handler)
        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key !== 'Enter') return
            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }
        document.addEventListener('keypress', handler)
        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [guessedLetters])

    return (
        <div className={styles.container}>
            <HangmanBanner isWinner={isWinner} isLoser={isLoser} />
            <HangmanDrawing numberOfGuesses={inccorectLetters.length} />
            <HangmanWord
                reveal={isLoser}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
            />
            <Keyboard
                activeLetters={guessedLetters.filter((letter) =>
                    wordToGuess.includes(letter)
                )}
                inactiveLetters={inccorectLetters}
                addGuessedLetter={addGuessedLetter}
                disabled={isLoser || isLoser}
            />
        </div>
    )
}

export default App
