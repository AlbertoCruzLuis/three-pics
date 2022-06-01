import { useAuth } from "feature/Login/hooks/useAuth"
import { Form, Formik } from "formik"
import { loginSchema } from "utils/validation/loginSchema"
import { LoginData } from "../../components/LoginData"

export const LoginForm = () => {
  const { loginMutation } = useAuth()
  const initialFormValues = {
    email: "",
    password: ""
  }

  const handleSubmit = async (values: any) => {
    const formatedData = {
      email: values.email,
      password: values.password,
    }

    loginMutation.mutate(formatedData)
  }
  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={loginSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => {
          return (
            <Form>
              <LoginData />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}