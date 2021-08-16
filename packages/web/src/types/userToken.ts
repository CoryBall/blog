import { Role } from '../graphql/generatedTypes'

type UserToken = {
  id: string
  bearer: string
  firstName: string
  lastName: string
  roles: Array<Role>
}

export default UserToken
