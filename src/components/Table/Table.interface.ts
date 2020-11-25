import { User, UserKeys } from '../../api/api.interface'
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
    dataKey: keyof User;
    label: string;
    numeric?: boolean;
    width: number;
}

export interface MuiVirtualizedTableProps {
    columns: ColumnData[];
    headerHeight?: number;
    onRowClick?: () => void;
    rowCount: number;
    rowGetter: (row: { index: number }) => User;
    rowHeight?: number;
    sortUsers: SortUsers;
    sortByField: UserKeys | null;
    sortOrder: 'ASC' | 'DESC';
}

export type SortUsers = (sortByFiled: UserKeys) => void;

export interface TableState {
    users: User[];
    sortByField: UserKeys | null;
    sortOrder: 'ASC' | 'DESC';
}

export interface MyTableHeaderProps extends TableHeaderProps {
    dataKey: UserKeys
}
