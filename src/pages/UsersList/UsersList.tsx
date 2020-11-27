import React, { useEffect } from 'react'
import { apiGetUsers, GET_USERS_URL_SPARE } from '../../api/getUsers.api'
import { CircularProgress, Fab } from '@material-ui/core'
import { Table } from '../../components/Table/Table'
import { AppUserState } from '../../App/App'
import styles from './UsersList.module.scss'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { DialogAddUser } from '../../components/DialogAddUser/DialogAddUser'

export function UsersList(props: AppUserState): JSX.Element {

    const { users, setUsers } = props

    const getUsers = async () => {
        if (!users.length) {
            const { data } = await apiGetUsers(GET_USERS_URL_SPARE)
            setUsers(data)
        }
    }

    useEffect(() => {
        getUsers()
    })

    if (!(users.length)) {
        return <CircularProgress />
    }

    return (
        <div className={styles.usersListWrapper}>
            <div className={styles.headerCaption}>
                <i>
                    Count of items: {users.length}
                </i>
                <DialogAddUser />
            </div>
            <Table {...props} />
        </div>
    )
}



