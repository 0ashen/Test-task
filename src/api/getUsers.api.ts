import axios, { AxiosPromise } from 'axios'
import { EntityUser } from './api.interface'


const GET_USERS_URL_REMOTE: string = 'https://hjkasdfasdf.free.beeceptor.com/my/api/path'
export const GET_USERS_URL_SPARE = (process.env.NODE_ENV === 'production' ? '/Test-task-Benovate.ru' : '') + '/MOCK_DATA.json'

export function apiGetUsers(url: string = GET_USERS_URL_REMOTE): AxiosPromise<EntityUser[]> {
    return axios({
        method: 'get',
        url: url,
    })
}
