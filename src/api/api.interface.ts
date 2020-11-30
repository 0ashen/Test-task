export interface EntityUser {
    readonly id: number,
    readonly first_name: string,
    readonly last_name: string,
    readonly group: EntityUserGroups | null,
}

export enum EntityUserGroups {
    'Development department' = 'Development department',
    Management = 'Management',
    'Human Resources Department' = 'Human Resources Department',
    'Accounting department' = 'Accounting department'
}
