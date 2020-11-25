import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { SortUsers, TableState } from './Table.interface'
import { User, UserKeys, UserProps } from '../../api/api.interface'
import styles from './Table.module.scss'
import { MaterialUIVirtualizedTable } from './children/MaterialUiVirtualizedTable'
import { Fab } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'


function Table(props: UserProps) {

    const [{ users, sortByField, sortOrder }, setUsers] = useState<TableState>(
        {
            users: props.users,
            sortByField: null,
            sortOrder: 'ASC',
        },
    )

    const sortUsers: SortUsers = (sortByFieldProp: UserKeys) => {
        const sortOrderProp = sortByFieldProp === sortByField && sortOrder === 'ASC' ? 'DESC' : 'ASC'
        users.sort((a: User, b: User) => {
            if (a[sortByFieldProp] < b[sortByFieldProp]) {
                return sortOrderProp === 'ASC' ? -1 : 1
            }
            if (a[sortByFieldProp] > b[sortByFieldProp]) {
                return sortOrderProp === 'ASC' ? 1 : -1
            }
            return 0
        })
        setUsers((state): TableState => ({
            ...state,
            users: users,
            sortOrder: sortOrderProp,
            sortByField: sortByFieldProp,
        }))
    }
    return (
        <div className={styles.usersTableWrapper}>
            <div className={styles.headerCaption}>
                <i>
                    Count of items: {users.length}
                </i>
                <Fab variant="extended"
                     color="secondary">
                    <PersonAddIcon />
                    <b>add user</b>
                </Fab>
            </div>
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
                            dataKey: UserKeys.id,
                            numeric: true,
                        },
                        {
                            width: 300,
                            label: 'Name',
                            dataKey: UserKeys.first_name,
                        },
                        {
                            width: 500,
                            label: 'Last Name',
                            dataKey: UserKeys.last_name,
                        },
                        {
                            width: 500,
                            label: 'Group',
                            dataKey: UserKeys.group,
                        },
                    ]}
                />
            </Paper>
        </div>
    )
}

export { Table }
