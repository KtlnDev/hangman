import React from 'react'
import KEYS from './Keys'
import styles from './Keyboard.module.scss'

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    disabled: boolean
    addGuessedLetter: (letter: string) => void
}

const Keyboard: React.FC<KeyboardProps> = ({
    activeLetters,
    inactiveLetters,
    disabled,
    addGuessedLetter,
}) => {
    return (
        <div className={styles.container}>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        className={`${styles.btn} ${
                            isActive ? styles.active : ''
                        } ${isInactive ? styles.inactive : ''}`}
                        key={key}
                        disabled={isActive || isInactive || disabled}
                        onClick={() => addGuessedLetter(key)}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard
