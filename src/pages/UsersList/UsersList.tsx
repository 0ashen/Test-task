import React, { useEffect } from 'react'
import { apiGetUsers, GET_USERS_URL_SPARE } from '../../api/getUsers.api'
import { CircularProgress } from '@material-ui/core'
import { UsersTable } from '../../components/UsersTable/UsersTable'
import styles from './UsersList.module.scss'
import { DialogAddUser } from '../../components/DialogAddUser/DialogAddUser'
import { AppUserState } from '../../App/App.interface'

export function UsersList(props: AppUserState): JSX.Element {

    const { users, setUsers } = props

    const getUsers = async () => {
        if (!users.data.length) {
            const { data } = await apiGetUsers(GET_USERS_URL_SPARE)
            setUsers({data: data})
        }
    }

    useEffect(() => {
        getUsers()
    })

    if (!(users.data.length)) {
        return <CircularProgress />
    }

    return (
        <div className={styles.usersListWrapper}>
            <div className={styles.headerCaption}>
                <i>
                    Count of items: {users.data.length}
                </i>
                <DialogAddUser {...props}/>
            </div>
            <UsersTable {...props} />
        </div>
    )
}



