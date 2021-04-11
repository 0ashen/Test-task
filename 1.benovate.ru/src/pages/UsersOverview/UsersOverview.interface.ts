import React from 'react'
import { AppState } from '../../App/App.interface'

export interface UserOverviewProps {
    usersState: AppState;
    setUsersState: React.Dispatch<React.SetStateAction<AppState>>;
}
