import store from '@/store'

export default async function ajaxAxiosError (error, reject) {
  await store.dispatch(
    'showToastError',
    '<h3>AJAX Error</h3><p>' + error + '</p>')
  reject(error)
}
