import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { SortTypes, SortUsersHandler, UsersTableProps, UsersTableState } from './UsersTable.interface'
import { EntityUser } from '../../api/apiEntity.interface'
import styles from './UsersTable.module.scss'
import { MaterialUIVirtualizedTable } from './children/MaterialUiVirtualizedTable/MaterialUiVirtualizedTable'

function UsersTable(props: UsersTableProps) {

    const [{ users, sortByField, sortOrder }, setUsers] = useState<UsersTableState>(
        {
            users: props.usersList,
            sortOrder: SortTypes.ASC,
            sortByField: 'id',
        },
    )

    const sortUsersHandler: SortUsersHandler = (sortByFieldNext: UsersTableState['sortByField']): void => {

        const sortOrderNext = sortByFieldNext === sortByField && sortOrder === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC

        users.sort((a: EntityUser, b: EntityUser) => {
            if (a[sortByFieldNext] < b[sortByFieldNext]) {
                return sortOrderNext === SortTypes.ASC ? -1 : 1
            }
            if (a[sortByFieldNext] > b[sortByFieldNext]) {
                return sortOrderNext === SortTypes.ASC ? 1 : -1
            }
            return 0
        })

        setUsers((state: UsersTableState): UsersTableState => ({
            users: users,
            sortOrder: sortOrderNext,
            sortByField: sortByFieldNext,
        }))
    }

    useEffect(() => {
        setUsers((oldState) => {
            return {
                ...oldState,
                users: props.usersList,
            }
        })
    }, [props.usersList])

    return (
        <Paper className={styles.paper}>
            <MaterialUIVirtualizedTable
                rowCount={users.length}
                rowGetter={({ index }: { index: number }) => users[index]}
                sortUsers={sortUsersHandler}
                sortByField={sortByField}
                sortOrder={sortOrder}
                columns={[
                    {
                        width: 100,
                        label: 'ID',
                        dataKey: 'id',
                        numeric: true,
                        justDesktop: true
                    },
                    {
                        width: 300,
                        label: 'Name',
                        dataKey: 'first_name',
                    },
                    {
                        width: 500,
                        label: 'Last Name',
                        dataKey: 'last_name',
                    },
                    {
                        width: 500,
                        label: 'Group',
                        dataKey: 'group',
                    },
                ]}
            />
        </Paper>
    )
}

export { UsersTable }
