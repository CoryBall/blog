import * as React from 'react'
import { createLink } from '../apollo'
import {
  AppContextPropsType,
  getTokensFromCookies,
  removeCookies,
  setCookies,
} from './helpers'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { UserToken } from '../../../types'
import { useMeLazyQuery } from '../../../graphql/generatedTypes'

export type AppProviderProps = {
  apollo: ApolloClient<NormalizedCacheObject>
  children: React.ReactNode
}

export const AppContext = React.createContext<AppContextPropsType>({
  isAuthenticated: false,
  loading: false,
  setLoading: () => {
    return
  },
  logOut: () => {
    return
  },
  logIn: () => {
    return
  },
  user: undefined,
})

export const AppProvider = (props: AppProviderProps): React.ReactElement => {
  const { apollo, children } = props
  const [login, { data, error }] = useMeLazyQuery()

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<UserToken | undefined>(undefined)

  React.useEffect(() => {
    async function loadUserFromCookies(): Promise<void> {
      const { bearer } = getTokensFromCookies<UserToken>()
      if (bearer) {
        apollo.setLink(createLink(bearer))
        try {
          await login()
        } catch (e) {
          console.error(e)
        }
      }
    }
    loadUserFromCookies().then()
  }, [])

  // When log request is complete, set context props
  React.useEffect(() => {
    if (data?.me && !error) {
      setUser(data?.me as UserToken)
      setIsAuthenticated(true)
    }
  }, [data])

  function loginUser(user: UserToken): void {
    setCookies(user)
    setUser(user)
    if (apollo) {
      apollo.setLink(createLink(user.bearer))
    }
    setIsAuthenticated(true)
  }

  async function logOut(): Promise<void> {
    if (apollo) {
      await apollo.clearStore()
    }
    removeCookies()
    setUser(undefined)
    setIsAuthenticated(false)
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        loading,
        setLoading,
        logOut,
        user,
        logIn: loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): AppContextPropsType => React.useContext(AppContext)
export default useApp
