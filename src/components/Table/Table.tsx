import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { SortOrderType, SortUsers, TableState } from './Table.interface'
import { EntityUser, EntityUserKeys } from '../../api/api.interface'
import styles from './Table.module.scss'
import { MaterialUIVirtualizedTable } from './children/MaterialUiVirtualizedTable'
import { AppUserState } from '../../App/App'


function Table(props: AppUserState) {

    const [{ users, sortByField, sortOrder }, setUsers] = useState<TableState>(
        {
            users: props.users,
            sortByField: EntityUserKeys.id,
            sortOrder: SortOrderType.ASC,
        },
    )

    const sortUsers: SortUsers = (sortByFieldNext: EntityUserKeys) => {

        const sortOrderNext = sortByFieldNext === sortByField && sortOrder === SortOrderType.ASC ? SortOrderType.DESC : SortOrderType.ASC
        users.sort((a: EntityUser, b: EntityUser) => {
            if (a[sortByFieldNext] < b[sortByFieldNext]) {
                return sortOrderNext === SortOrderType.ASC ? -1 : 1
            }
            if (a[sortByFieldNext] > b[sortByFieldNext]) {
                return sortOrderNext === SortOrderType.ASC ? 1 : -1
            }
            return 0
        })

        setUsers((state): TableState => ({
            ...state,
            users: users,
            sortOrder: sortOrderNext,
            sortByField: sortByFieldNext,
        }))
    }
    return (
        <Paper className={styles.paper}>
            <MaterialUIVirtualizedTable
                rowCount={users.length}
                rowGetter={({ index }) => users[index]}
                sortUsers={sortUsers}
                sortByField={sortByField}
                sortOrder={sortOrder}
                columns={[
                    {
                        width: 100,
                        label: 'ID',
                        dataKey: EntityUserKeys.id,
                        numeric: true,
                    },
                    {
                        width: 300,
                        label: 'Name',
                        dataKey: EntityUserKeys.first_name,
                    },
                    {
                        width: 500,
                        label: 'Last Name',
                        dataKey: EntityUserKeys.last_name,
                    },
                    {
                        width: 500,
                        label: 'Group',
                        dataKey: EntityUserKeys.group,
                    },
                ]}
            />
        </Paper>
    )
}

export { Table }
