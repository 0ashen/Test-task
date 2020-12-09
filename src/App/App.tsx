import React, { useState } from 'react'
import styles from './App.module.scss'
import { Redirect, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import GitHubIcon from '@material-ui/icons/GitHub'
import { EntityUserGroups } from '../api/apiEntity.interface'
import { Navigation, routes } from '../components/Navigation/Navigation'
import { UsersOverview } from '../pages/UsersOverview/UsersOverview'
import { Welcome } from '../pages/Welcome/Welcome'
import { EntityRedirect, EntityRoute } from '../components/Navigation/Navigation.interface'
import { AppProps, AppState } from './App.interface'

function AppComponent(props: AppProps): JSX.Element {

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
                        <Redirect to={ props.redirectTo || (routes[0] as EntityRedirect).to} />
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
               href="https://github.com/0ashen/Test-task">
                <GitHubIcon />
            </a>
        </>
    )
}

export const App = withRouter(AppComponent)
