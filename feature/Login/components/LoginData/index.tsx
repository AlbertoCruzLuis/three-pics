import { ErrorMessage, Field, useFormikContext } from "formik"
import toast from "react-hot-toast"
import { styles } from "../../constants"

export const LoginData = () => {
  const { handleSubmit, errors, values } = useFormikContext<any>()

  const submitForm = async (values: any) => {
    try {
      const isError = Object.keys(errors).length !== 0

      if (isError) {
        toast.error("Please fill all required fields")
      }

      handleSubmit()

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <label className={styles.label} htmlFor="email">Email</label>
        <Field className={styles.field} type="text" name="email" placeholder="jhon@example.com" />
        <ErrorMessage className={styles.errorMessage} name="email" component="div" />

        <label className={styles.label} htmlFor="password">Password</label>
        <Field className={styles.field} type="text" name="password" placeholder="password" />
        <ErrorMessage className={styles.errorMessage} name="password" component="div" />
      </div>
      <button
        className="flex items-center justify-center gap-2 p-2 px-4 bg-blue-500 rounded-md max-w-max"
        onClick={submitForm}>
      <span className="text-lg font-semibold">Login</span>
      </button>
    </div>
  )
}