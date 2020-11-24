import { WithStyles } from '@material-ui/core/styles'
import { tableStyles } from './UsersTable'
import { User } from '../../api/api.interface'


export interface ColumnData {
    dataKey: string;
    label: string;
    numeric?: boolean;
    width: number;
}

export interface Row {
    index: number;
}


export interface MuiVirtualizedTableProps extends WithStyles<typeof tableStyles> {
    columns: ColumnData[];
    headerHeight?: number;
    onRowClick?: () => void;
    rowCount: number;
    rowGetter: (row: Row) => User;
    rowHeight?: number;
}

export type Sample = [string, number, number, number, number];

declare module '@material-ui/core/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    interface BaseCSSProperties {
        /*
         * Used to control if the rule-set should be affected by rtl transformation
         */
        flip?: boolean;
    }
}

export interface PropsReactVirtualizedTable {
    users:  User[]
}
