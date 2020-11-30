import { EntityUser } from '../../../../api/api.interface'
import { SortTypes, SortUsersHandler, UsersTableState } from '../../UsersTable.interface'

export interface MuiVirtualizedTableProps {
    columns: {
        dataKey: keyof EntityUser;
        label: string;
        numeric?: boolean;
        width: number;
    }[];
    headerHeight?: number;
    onRowClick?: () => void;
    rowCount: number;
    rowGetter: (row: { index: number }) => EntityUser;
    rowHeight?: number;
    sortUsers: SortUsersHandler;
    sortByField: UsersTableState['sortByField'];
    sortOrder: SortTypes;
}
