import axios from 'axios'
import store from '@/store'

export default async function post (url, data, config = null) {
  store.commit('setIsPreload', true)
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then((response) => {
        store.commit('setIsPreload', false)
        resolve(response)
      })
      .catch(err => {
        store.commit('setIsPreload', false)
        this.ajaxAxiosError(err, reject)
      })
  })
}
