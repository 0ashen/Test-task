import React from 'react'

export enum EntityUserKeys {
    id = 'id',
    first_name = 'first_name',
    last_name = 'last_name',
    group = 'group',
}

export interface EntityUser {
    readonly [EntityUserKeys.id]: number,
    readonly [EntityUserKeys.first_name]: string,
    readonly [EntityUserKeys.last_name]: string,
    readonly [EntityUserKeys.group]: string,
}
