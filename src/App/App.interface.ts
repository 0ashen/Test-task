import { RouteComponentProps } from 'react-router-dom'
import { EntityUser, EntityUserGroups } from '../api/apiEntity.interface'

export type UsersSortedByGroup = { [g in EntityUserGroups | 'withoutGroup']: EntityUser[]; };

export interface AppState {
    usersAll: EntityUser[],
    usersSortedByGroup: UsersSortedByGroup
}

export interface AppProps extends RouteComponentProps {
    redirectTo?: string;
}

