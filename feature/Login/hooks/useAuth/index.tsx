import { useMutation, useQuery } from "react-query"
import { loginPost } from "services/auth"
import { useLocalStorage } from 'react-use';
import { useRouter } from "next/router";

export interface IData {
  email: string,
  password: string,
}

export const useAuth = () => {
  const [auth, setAuth] = useLocalStorage('auth');
  const router = useRouter()

  const login = async (data: IData) => {
    const userName = data.email.split("@")[0]
    const isLogin = await loginPost(userName, data.password)
    console.log("isLogin", isLogin);
    setAuth(isLogin)
    if (isLogin) {
      router.push("/")
    }
  }

  const loginMutation = useMutation<any, any, any, void>(data => {
    return login(data)
  })

  return {
    loginMutation
  }
}