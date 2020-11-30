import { EntityUser } from '../api/api.interface'
import React, { SetStateAction } from 'react'

export interface AppUserState {
    users: { data: EntityUser[] },
    setUsers: React.Dispatch<SetStateAction<{ data: EntityUser[]; }>>
}
