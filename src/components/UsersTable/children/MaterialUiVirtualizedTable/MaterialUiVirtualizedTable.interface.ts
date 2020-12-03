import { EntityUser } from '../../../../api/apiEntity.interface'
import { SortTypes, SortUsersHandler, UsersTableState } from '../../UsersTable.interface'

export interface MuiVirtualizedTableProps {
    columns: {
        dataKey: keyof EntityUser;
        label: string;
        numeric?: boolean;
        width: number;
        justDesktop?: boolean
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
