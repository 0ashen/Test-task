import React, { useState } from 'react'
import styles from './App.module.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub'
import { EntityUser } from '../api/api.interface'
import { Navigation, routes } from '../components/Navigation/Navigation'
import { UsersList } from '../pages/UsersList/UsersList'
import { Welcome } from '../pages/Welcome'

function AppComponent(): JSX.Element {

    const [users, setUsers] = useState<{ data: EntityUser[] }>({ data: [] })

    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <Switch>
                    <Route exact
                           path="/">
                        <Redirect to={routes[0].url} />
                    </Route>
                    <Route path={routes[0].url} key={routes[0].url}>
                        <Welcome />
                    </Route>
                    <Route path={routes[1].url} key={routes[1].url}>
                        <UsersList users={users} setUsers={setUsers} />
                    </Route>
                </Switch>
            </main>
            <a className={styles.githubLink}
               target="_blank"
               rel="noreferrer"
               href="https://github.com/0ashen/Test-task-Benovate.ru">
                <GitHubIcon />
            </a>
        </>
    )
}

export const App = withRouter(AppComponent)
