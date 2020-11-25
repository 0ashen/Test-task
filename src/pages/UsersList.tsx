import React, { useEffect } from 'react'
import { api_getUsers, API_URL_SPARE } from '../api/queries'
import { CircularProgress } from '@material-ui/core'
import { User } from '../api/api.interface'
import { Table } from '../components/Table/Table'

export interface UsersListProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}
export type IUsersList = (props: UsersListProps) => JSX.Element

export function UsersList(props: UsersListProps): JSX.Element {

    const { users, setUsers } = props

    const getUsers = async () => {
        if (!users.length) {
            const { data } = await api_getUsers(API_URL_SPARE)
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



