import Typewriter from 'typewriter-effect'
import { typeRoles } from './type-roles'

export function RoleTypewriter() {
  return <Typewriter onInit={typeRoles} />
}
