import React from 'react'
import styles from './HangmanBanner.module.scss'

type HangmanBannerProps = {
    isWinner: boolean
    isLoser: boolean
}

const HangmanBanner: React.FC<HangmanBannerProps> = ({ isWinner, isLoser }) => {
    return (
        <div className={styles.container}>
            {isWinner && 'Winnnneeer'}
            {isLoser && 'Loseeer'}
        </div>
    )
}

export default HangmanBanner
