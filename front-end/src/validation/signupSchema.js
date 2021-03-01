import * as yup from 'yup'

export default yup.object().shape({
  first: yup
    .string()
    .required("First name required")
    .min(3, "First name must be at least 3 letters"),
  last: yup
    .string()
    .required("Last name required")
    .min(3, "Last name must be at least 3 letters"),
  username: yup
    .string()
    .required("Username required")
    .min(6, "Username must be at least 6 characters"),
  email: yup
    .string()
    .matches(/^\d+$/)
    .required("Email required"),
  zipcode: yup
    .string()
    .required("Zipcode is required"),
  password: yup
    .string()
    .required("Password required")
    .min("Password must be between 8-16 characters")
    .max("Password must be between 8-16 characters"),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
})