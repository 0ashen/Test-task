import { AppUserState } from '../../App/App.interface'
import React from 'react'
import { UsersListState } from '../../pages/UsersList/UserList.interface'


export interface DialogAddUserProps extends AppUserState {
    UsersListState: UsersListState;
    UsersListSetState: React.Dispatch<React.SetStateAction<UsersListState>>;
}
