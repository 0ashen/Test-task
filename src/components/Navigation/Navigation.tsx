import React from 'react'
import styles from '../../App/App.module.scss'
import { Button, ButtonGroup } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Welcome } from '../../pages/Welcome'
import { UsersList, UsersListProps } from '../../pages/UsersList'

export enum PagesEnums {
    welcome = '/welcome',
    'user list' = '/user-list'
}

export interface Page {
    readonly text: string;
    readonly url: PagesEnums;
    readonly component: ((props: UsersListProps) => JSX.Element) | (() => JSX.Element);
}


export const routes: Page[] = [
    {
        text: 'welcome',
        url: PagesEnums.welcome,
        component: Welcome,
    },
    {
        text: 'user list',
        url: PagesEnums['user list'],
        component: UsersList,
    },
]

export function Navigation(): JSX.Element {
    return (
        <nav className={styles.navigation}>
            <ButtonGroup variant="contained">
                {routes.map((page: Page) => (
                    <Button
                        component={NavLink}
                        to={page.url}
                        variant="contained"
                        activeClassName="MuiButton-containedPrimary"
                    >
                        {page.text}
                    </Button>
                ))}
            </ButtonGroup>
        </nav>
    )
}
