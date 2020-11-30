import { EntityUser } from '../../api/api.interface'
import { AppUserState } from '../../App/App.interface'

declare module '@material-ui/core/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    interface BaseCSSProperties {
        /*
         * Used to control if the rule-set should be affected by rtl transformation
         */
        flip?: boolean;
    }
}

export enum SortTypes {
    ASC,
    DESC
}

export interface UsersTableState {
    users: EntityUser[];
    sortByField: Exclude<keyof EntityUser, 'group'>;
    sortOrder: SortTypes;
}

export interface UsersTableProps {
    users: EntityUser[];
    setUsers: AppUserState['setUsers'];
}

export type SortUsersHandler = (sortByFieldNext: UsersTableState['sortByField']) => void;
