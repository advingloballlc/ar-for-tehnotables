import { navigate } from 'gatsby'
import { deleteCookie } from '../utils/deleteCookie'

export const logoutUser = langCode => {
  deleteCookie('user_id')
  deleteCookie('user_info')
  navigate(`${langCode}login`)
}