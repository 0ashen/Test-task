import { Pages } from './Navigation'
import { AppUserState } from '../../App/App.interface'

export interface EntityRoute {
    readonly text: string;
    readonly url: Pages;
    readonly component: ((props: AppUserState) => JSX.Element) | (() => JSX.Element);
}
