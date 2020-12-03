export interface EntityUser {
    readonly id: number,
    readonly first_name: string,
    readonly last_name: string,
    readonly group: EntityUserGroups | null,
}

export enum EntityUserGroups {
    'Accounting department' = 'Accounting department',
    'Development department' = 'Development department',
    'Human Resources Department' = 'Human Resources Department',
    Management = 'Management'
}
