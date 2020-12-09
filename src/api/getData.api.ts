import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import { EntityUser } from './apiEntity.interface'

function getData<T>(url: string, method: AxiosRequestConfig['method']): () => AxiosPromise<T> {
    return (): AxiosPromise<T> => axios({ method, url })
}

export const getUsers = getData<EntityUser[]>(
    (process.env.NODE_ENV === 'production' ? '/Test-task' : '') + '/MOCK_DATA.json',
    'get',
)
