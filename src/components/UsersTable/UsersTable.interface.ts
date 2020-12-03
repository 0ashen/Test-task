import { EntityUser } from '../../api/apiEntity.interface'
import { UserOverviewProps } from '../../pages/UsersOverview/UsersOverview.interface'

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
    usersList: EntityUser[]
}

export type SortUsersHandler = (sortByFieldNext: UsersTableState['sortByField']) => void;
