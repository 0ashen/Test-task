import React, { useState } from 'react'
import styles from './App.module.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub'
import { EntityUserGroups } from '../api/apiEntity.interface'
import { Navigation, routes } from '../components/Navigation/Navigation'
import { UsersOverview } from '../pages/UsersOverview/UsersOverview'
import { Welcome } from '../pages/Welcome'
import { EntityRedirect, EntityRoute } from '../components/Navigation/Navigation.interface'
import { AppState } from './App.interface'

function AppComponent(): JSX.Element {

    const [usersState, setUsersState] = useState<AppState>({
        usersAll: [],
        usersSortedByGroup: {
            [EntityUserGroups['Accounting department']]: [],
            [EntityUserGroups['Development department']]: [],
            [EntityUserGroups['Human Resources Department']]: [],
            [EntityUserGroups['Management']]: [],
            withoutGroup: [],
        },
    })

    return (
        <>
            <Navigation />
            <main className={styles.main}>
                <Switch>
                    <Route exact
                           path={(routes[0] as EntityRedirect).from}>
                        <Redirect to={(routes[0] as EntityRedirect).to} />
                    </Route>
                    <Route path={(routes[1] as EntityRoute).url}>
                        <Welcome />
                    </Route>
                    <Route path={(routes[2] as EntityRoute).url}>
                        <UsersOverview usersState={usersState}
                                       setUsersState={setUsersState} />
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
