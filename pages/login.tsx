import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useLocalStorage } from "react-use"
import { LoginForm } from "../feature/Login/content/LoginForm/inde"


const Login: NextPage = () => {
  const [auth] = useLocalStorage('auth');
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      if (auth) {
        router.push("/")
      }
    }, 1000)
  }, [auth])

  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login