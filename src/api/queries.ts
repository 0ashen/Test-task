import axios, { AxiosPromise } from 'axios'
import { User } from './api.interface'


const API_URL: string = 'https://hjkasdfasdf.free.beeceptor.com/my/api/path'
export const API_URL_SPARE = '/MOCK_DATA.json'


export function api_getUsers(url: string = API_URL): AxiosPromise<User[]> {
    return axios({
        method: 'get',
        url: url,
    })
}
