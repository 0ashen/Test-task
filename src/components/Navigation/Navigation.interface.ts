import { UsersListProps } from '../../pages/UsersList'
import { Pages } from './Navigation'

export interface EntityRoute {
    readonly text: string;
    readonly url: Pages;
    readonly component: ((props: UsersListProps) => JSX.Element) | (() => JSX.Element);
}
