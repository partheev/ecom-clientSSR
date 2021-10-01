import { Login } from '../components/Login/Login'
import { LoginLayout } from '../components/Login/LoginLayout'
import { ShowImage } from '../components/Login/ShowImage'

export default function signUp() {
  return (
    <LoginLayout>
      <ShowImage />
      <Login />
    </LoginLayout>
  )
}
