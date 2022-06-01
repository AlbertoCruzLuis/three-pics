import * as Yup from "yup"

// Add validation for all fields
/**
 * - email: string
 * - password: string	
**/

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required")
})
