import { setTimeout } from 'timers'

/**
 * CallBack
 */
export const getDataCallback = (callback) => {
  // Solicitud http a un API
  const name = 'Gerardo Gallegos'

  setTimeout(() => {
    callback(name)
  }, 300)
}

/**
 * Promise
 */
export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Gerardo Gallegos')
    }, 300)
  })
}

/**
 * Promise error
 */
export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 300)
  })
}

/**
 * get users by API
 */
export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5')
  const user = await res.json()

  return user
}