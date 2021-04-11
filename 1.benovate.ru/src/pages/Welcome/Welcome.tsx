import React from 'react'

export function Welcome(): JSX.Element {
    return (
        <article style={{
            textAlign: 'center',
        }}>
            <h1 style={{
                fontStyle: 'italic',
                fontWeight: 'normal',
            }}>
                Welcome to my test task!
            </h1>
            <a href="https://github.com/0ashen/Test-task"
               target="_blank"
               rel="noreferrer">
                Go to <b>GITHUB</b>
            </a>
        </article>
    )
}
