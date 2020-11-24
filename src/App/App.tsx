import React, { useState } from 'react'
import styles from './App.module.scss'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { Welcome } from '../pages/Welcome/Welcome'
import { List } from '../pages/List/List'
import { Button, ButtonGroup } from '@material-ui/core'
import { withRouter } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub'
import { User } from '../api/api.interface'

function AppComponent(): JSX.Element {

    const [users, setUsers] = useState<User[]>([])

    return (
        <>
            <nav className={styles.navigation}>
                <ButtonGroup variant="contained">
                    <Button
                        component={NavLink}
                        to={'/welcome'}
                        variant="contained"
                        activeClassName="MuiButton-containedPrimary"
                    >
                        welcome
                    </Button>
                    <Button
                        component={NavLink}
                        to={'/list'}
                        activeClassName="MuiButton-containedPrimary"
                        variant="contained">
                        user list
                    </Button>
                </ButtonGroup>

            </nav>
            <main className={styles.main}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/list">
                        <List users={users} setUsers={setUsers}/>
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
