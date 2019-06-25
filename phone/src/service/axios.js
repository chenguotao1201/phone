/**
 * Created by Lenovo on 2019/6/22.
 */

import {axios} from '@/service/axiosconfig'

export default {
  common (url, params, type) {
    return new Promise((resolve, reject) => {
      axios({
        method: type,
        url: url,
        data: params
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  post (url, params) {
    return this.common(url, params, 'post')
  }
}
