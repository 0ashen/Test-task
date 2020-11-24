import React, { useEffect } from 'react'
import { api_getUsers } from '../../api/queries'
import { CircularProgress } from '@material-ui/core'
import { User } from '../../api/api.interface'
import { ReactVirtualizedTable } from '../../components/UsersTable/UsersTable'

interface Props {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export function List(props: Props): JSX.Element {

    const { users, setUsers } = props

    const getUsers = () => {
        if (!users.length) {
            api_getUsers()
                .then((res) => {
                    setUsers(res.data)
                })
                .catch(() => {
                    return api_getUsers()
                })
        }
    }
    useEffect(() => {
        getUsers()
    }, [props.users])

    return (
        <>
            {!(users.length) ?
                <CircularProgress />
                : <ReactVirtualizedTable users={users} />}
            {/*users={users}*/}
        </>
    )
}



