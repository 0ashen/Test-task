import React from 'react'
import styles from './Welcome.module.scss'

export function Welcome(): JSX.Element {
    return (
        <article className={styles.article}>
            <h1>Welcome to my test task!</h1>
            <a href="https://github.com/0ashen/Test-task-Benovate.ru" target="_blank" rel="noreferrer">Go to <b>GITHUB</b></a>
        </article>
    )
}
