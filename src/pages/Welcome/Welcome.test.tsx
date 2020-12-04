import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../../App/App'

test('test render users overview page', () => {
    render(
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/Test-task-Benovate.ru' : '/'}>
            <App />
        </BrowserRouter>,
    )

    const linkElement = screen.getByText(/Welcome to my test task!/i)
    expect(linkElement).toBeInTheDocument()
})
