import React, { useState } from 'react'
import styles from './App.module.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub'
import { UsersArray } from '../api/api.interface'
import { Navigation, Page, routes } from '../components/Navigation/Navigation'

function AppComponent(): JSX.Element {

    const [users, setUsers] = useState<UsersArray>([])

    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <Switch>
                    <Route exact
                           path="/">
                        <Redirect to={routes[0].url} />
                    </Route>
                    {routes.map((page: Page) => {
                        const ComponentPage = page.component
                        return (
                            <Route path={page.url}>
                                <ComponentPage users={users} setUsers={setUsers} />
                            </Route>
                        )
                    })}
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
