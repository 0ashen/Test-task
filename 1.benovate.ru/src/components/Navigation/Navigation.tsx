import React from 'react'
import styles from '../../App/App.module.scss'
import { Button, ButtonGroup } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { EntityRedirect, EntityRoute } from './Navigation.interface'

export const routes: (EntityRedirect | EntityRoute)[] = [
    {
        redirect: true,
        from: '/',
        to: '/welcome',
    },
    {
        label: 'welcome',
        url: '/welcome',
    },
    {
        label: 'users overview',
        url: '/users-overview',
    },
]

export function Navigation(): JSX.Element {
    return (
        <nav className={styles.navigation}>
            <ButtonGroup variant="contained">
                {routes.map((route: EntityRedirect | EntityRoute) => {
                    if ('redirect' in route) {
                        return null
                    }
                    return (
                        <Button
                            component={NavLink}
                            to={route.url}
                            variant="contained"
                            activeClassName="MuiButton-containedPrimary"
                            key={route.url}
                        >
                            {route.label}
                        </Button>
                    )
                })}
            </ButtonGroup>
        </nav>
    )
}
