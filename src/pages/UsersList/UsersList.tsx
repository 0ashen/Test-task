import React, { useEffect, useState } from 'react'
import { apiGetUsers, GET_USERS_URL_SPARE } from '../../api/getUsers.api'
import { CircularProgress, FormControlLabel, Switch } from '@material-ui/core'
import { UsersTable } from '../../components/UsersTable/UsersTable'
import styles from './UsersList.module.scss'
import { DialogAddUser } from '../../components/DialogAddUser/DialogAddUser'
import { EntityUser, EntityUserGroups } from '../../api/api.interface'
import { SplitToSubArrays, SplitToSubArraysResult, UserListProps, UsersListState } from './UserList.interface'

export const UsersList = function(props: UserListProps): JSX.Element {

    const { users, setUsers } = props

    const [state, setState] = useState<UsersListState>({ viewByGroup: false })

    const viewByGroupHandler = () => {
        setState({ ...state, viewByGroup: !state.viewByGroup })
    }

    const getUsers = async () => {
        if (!users.data.length) {
            const { data } = await apiGetUsers(GET_USERS_URL_SPARE)
            setUsers({ data: data })
        }
    }

    useEffect(() => {
        getUsers()
    })

    if (!(users.data.length)) {
        return <CircularProgress />
    }

    const splitToSubArrays: SplitToSubArrays = (users: EntityUser[]): SplitToSubArraysResult => {
        const resultArrays: SplitToSubArraysResult = {
            [EntityUserGroups['Accounting department']]: [],
            [EntityUserGroups['Development department']]: [],
            [EntityUserGroups['Human Resources Department']]: [],
            [EntityUserGroups['Management']]: [],
            empty: [],
        }


        for (let i = 0; i < users.length; i++) {
            if (users[i].group) {
                resultArrays[users[i].group as EntityUserGroups].push(users[i])
            } else {
                resultArrays['empty'].push(users[i])
            }
        }

        return resultArrays
    }

    return (
        <div className={styles.usersListWrapper}>
            <div className={styles.headerCaption}>
                <i>
                    Count of items: {users.data.length}
                </i>
                <FormControlLabel
                    className={styles.checkbox}
                    control={
                        <Switch
                            name="checkedB"
                            checked={state.viewByGroup}
                            onChange={viewByGroupHandler}
                        />
                    }
                    label="By groups"
                />
                <DialogAddUser {...props} UsersListState={state} UsersListSetState={setState} />
            </div>
            {
                state.viewByGroup ?
                    Object
                        .values(splitToSubArrays(users.data))
                        .map((el, idx): JSX.Element => {
                            return <UsersTable key={idx} {...props} users={[...el] as unknown as EntityUser[]} />
                        })
                    :
                    <UsersTable {...props} users={users.data} />
            }

        </div>
    )
}



