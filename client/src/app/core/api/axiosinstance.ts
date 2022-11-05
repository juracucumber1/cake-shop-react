import axios from 'axios'

import { environment } from '../../../environment'

const apiURL = environment.API_PREFIX

export enum AxiosInstanceType {
  JSON = 'JSON',
  FORMDATA = 'FORM_DATA'
}

/**
 * Настройки для axios
 *
 * @param {string} type 'JSON' | 'FORM_DATA'
 * @returns
 */
const AxiosInstance = (type: AxiosInstanceType = AxiosInstanceType.JSON) => {
  let contentType = 'application/json'
  if (type === AxiosInstanceType.FORMDATA) {
    contentType = 'multipart/form-data'
  }

  const instance = axios.create({
    baseURL: apiURL,
    headers: {
      'Content-Type': contentType,
    },
    validateStatus: (status) => {
      return status <= 500
    },
  })

  // if (token) {
  //     instance.defaults.headers.common.Authorization = `Bearer ${token}`
  // }

  instance.interceptors.request.use(
    (config) => {
      const { data = {} } = config

      // eslint-disable-next-line no-prototype-builtins
      if (config?.headers?.['Content-Type'] !== 'multipart/form-data') {
        return {
          ...config,
          data: JSON.stringify({ ...data }),
        }
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

export default AxiosInstance
