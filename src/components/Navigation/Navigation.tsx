import React from 'react'
import styles from '../../App/App.module.scss'
import { Button, ButtonGroup } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Welcome } from '../../pages/Welcome'
import { UsersList } from '../../pages/UsersList/UsersList'
import { EntityRoute } from './Navigation.interface'

export enum Pages {
    welcome = '/welcome',
    'user list' = '/user-list'
}

export const routes: EntityRoute[] = [
    {
        text: 'welcome',
        url: Pages.welcome,
    },
    {
        text: 'user list',
        url: Pages['user list'],
    },
]

export function Navigation(): JSX.Element {
    return (
        <nav className={styles.navigation}>
            <ButtonGroup variant="contained">
                {routes.map((page: EntityRoute) => (
                    <Button
                        component={NavLink}
                        to={page.url}
                        variant="contained"
                        activeClassName="MuiButton-containedPrimary"
                        key={page.url}
                    >
                        {page.text}
                    </Button>
                ))}
            </ButtonGroup>
        </nav>
    )
}
