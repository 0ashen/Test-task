import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../../App/App'
import { routes } from '../../components/Navigation/Navigation'
import { EntityRoute } from '../../components/Navigation/Navigation.interface'

test('test render users overview page', () => {
    render(
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/Test-task-Benovate.ru' : '/'}>
            <App redirectTo={(routes[2] as EntityRoute).url} />
        </BrowserRouter>,
    )

    const linkElement = screen.getByText(/Count of items/i)
    expect(linkElement).toBeInTheDocument()
})
