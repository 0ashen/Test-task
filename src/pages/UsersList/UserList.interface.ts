import { AppUserState } from '../../App/App.interface'
import { EntityUser, EntityUserGroups } from '../../api/api.interface'

export interface UserListProps extends AppUserState {
}

export interface SplitToSubArrays {
    (users: EntityUser[]): SplitToSubArraysResult
}

export type SplitToSubArraysResult = { [g in EntityUserGroups | 'empty']: EntityUser[]; };

export interface UsersListState {
    viewByGroup: boolean
}
