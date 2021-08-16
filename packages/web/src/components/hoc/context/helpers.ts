import Cookies from 'js-cookie'
import { UserToken } from '../../../types'

export type AppContextPropsType = {
  isAuthenticated: boolean
  loading: boolean
  setLoading: (_: boolean) => void
  logOut: () => void
  logIn: (_: UserToken) => void
  user: UserToken | undefined
}

export function setCookies(token: UserToken): void {
  const jsonToken = JSON.stringify(token)
  Cookies.set('userToken', jsonToken, { expires: 60 })
}

export function getTokensFromCookies<T>(): T {
  const jsonToken = Cookies.get('userToken')
  return JSON.parse(jsonToken) as T
}

export function removeCookies(): void {
  Cookies.remove('userToken')
}
