import axios, { AxiosPromise } from 'axios'
import { UsersArray } from './api.interface'


const API_GET_USERS_URL: string = 'https://hjkasdfasdf.free.beeceptor.com/my/api/path'
export const API_URL_SPARE = '/MOCK_DATA.json'


export function api_getUsers(url: string = API_GET_USERS_URL): AxiosPromise<UsersArray> {
    return axios({
        method: 'get',
        url: url,
    })
}
