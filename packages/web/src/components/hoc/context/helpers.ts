import Cookies from 'js-cookie'

export type AppContextPropsType = {
  isAuthenticated: boolean
  loading: boolean
  setLoading: (_: boolean) => void
  logOut: () => void
  logIn: (_: UserToken) => void
  user: UserToken | undefined
}

export function setCookies(token: string): void {
  const jsonToken = JSON.stringify(token)
  Cookies.set('userToken', jsonToken, { expires: 60 })
}

export function getTokensFromCookies(): string | null {
  const jsonToken = Cookies.get('userToken')
  return jsonToken ? JSON.parse(jsonToken) as string : null;
}

export function removeCookies(): void {
  Cookies.remove('userToken')
}
