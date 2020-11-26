import React, { useEffect } from 'react'
import { apiGetUsers, GET_USERS_URL_SPARE } from '../api/getUsers.api'
import { CircularProgress } from '@material-ui/core'
import { Table } from '../components/Table/Table'
import { AppUserState } from '../App/App'

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

    return (
        <>
            {!(users.length) ?
                <CircularProgress />
                : <Table {...props} />}
        </>
    )
}



