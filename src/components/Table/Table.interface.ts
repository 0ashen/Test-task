import { EntityUser, EntityUserKeys } from '../../api/api.interface'
import { TableHeaderProps } from 'react-virtualized'

declare module '@material-ui/core/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    interface BaseCSSProperties {
        /*
         * Used to control if the rule-set should be affected by rtl transformation
         */
        flip?: boolean;
    }
}

interface ColumnData {
    dataKey: keyof EntityUser;
    label: string;
    numeric?: boolean;
    width: number;
}

export interface MuiVirtualizedTableProps {
    columns: ColumnData[];
    headerHeight?: number;
    onRowClick?: () => void;
    rowCount: number;
    rowGetter: (row: { index: number }) => EntityUser;
    rowHeight?: number;
    sortUsers: SortUsers;
    sortByField: EntityUserKeys | null;
    sortOrder: 'ASC' | 'DESC';
}

export type SortUsers = (sortByFiled: EntityUserKeys) => void;

export interface TableState {
    users: EntityUser[];
    sortByField: EntityUserKeys | null;
    sortOrder: 'ASC' | 'DESC';
}

export interface MyTableHeaderProps extends TableHeaderProps {
    dataKey: EntityUserKeys
}
