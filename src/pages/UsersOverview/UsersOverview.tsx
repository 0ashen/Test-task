import React, { useEffect, useState } from 'react'
import { CircularProgress, FormControlLabel, Switch } from '@material-ui/core'
import styles from './UsersOverview.module.scss'
import { EntityUser, EntityUserGroups } from '../../api/apiEntity.interface'
import { UserOverviewProps } from './UsersOverview.interface'
import { UsersSortedByGroup } from '../../App/App.interface'
import { getUsers } from '../../api/getData.api'
import { DialogAddUser } from '../../components/DialogAddUser/DialogAddUser'
import { UsersTable } from '../../components/UsersTable/UsersTable'

export function UsersOverview(props: UserOverviewProps): JSX.Element {

    const [isViewByGroup, setIsViewByGroup] = useState<boolean>(false)

    const toggleViewByGroupHandler = () => setIsViewByGroup(!isViewByGroup)

    if (!props.usersState.usersAll.length) {
        getUsers()
            .then((res) => {
                props.setUsersState({
                    ...props.usersState,
                    usersAll: res.data,
                    usersSortedByGroup: sortToSubArraysProcedure(res.data),
                })
            })
        return <CircularProgress />
    }

    return (
        <div className={styles.usersListWrapper}>
            <div className={styles.headerCaption}>
                <i>
                    Count of items: {props.usersState.usersAll.length}
                </i>
                <FormControlLabel
                    className={styles.checkbox}
                    control={
                        <Switch
                            name="checkedB"
                            checked={isViewByGroup}
                            onChange={toggleViewByGroupHandler}
                        />
                    }
                    label="By groups"
                />
                <DialogAddUser {...props} />
            </div>
            {
                isViewByGroup ?
                    Object
                        .keys(props.usersState.usersSortedByGroup)
                        .map((groupName): JSX.Element => {
                            return <UsersTable key={groupName}
                                               usersList={props.usersState.usersSortedByGroup[groupName as unknown as keyof UsersSortedByGroup]} />
                        })
                    :
                    <UsersTable usersList={props.usersState.usersAll} />
            }

        </div>
    )
}


export function sortToSubArraysProcedure(users: EntityUser[]): UsersSortedByGroup {
    const resultArrays: UsersSortedByGroup = {
        [EntityUserGroups['Accounting department']]: [],
        [EntityUserGroups['Development department']]: [],
        [EntityUserGroups['Human Resources Department']]: [],
        [EntityUserGroups['Management']]: [],
        withoutGroup: [],
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].group) {
            resultArrays[users[i].group as EntityUserGroups].push(users[i])
        } else {
            resultArrays['withoutGroup'].push(users[i])
        }
    }

    return resultArrays
}

