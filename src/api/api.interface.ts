import React from 'react'

export enum UserKeys {
    id = 'id',
    first_name = 'first_name',
    last_name = 'last_name',
    group = 'group',
}

export interface User {
    readonly [UserKeys.id]: number,
    readonly [UserKeys.first_name]: string,
    readonly [UserKeys.last_name]: string,
    readonly [UserKeys.group]: string,
}

export type UsersArray = User[];

export interface UserProps {
    users: UsersArray;
    setUsers: React.Dispatch<React.SetStateAction<UsersArray>>;
}
