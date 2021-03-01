import * as yup from 'yup'

export default yup.object().shape({
  first: yup
    .string()
    .require("First name required")
    .min(3, "First name must be at least 3 letters"),
  last: yup
    .string()
    .require("Last name required")
    .min(3, "Last name must be at least 3 letters"),
  username: yup
    .string()
    .require("Username required")
    .min(6, "Username must be at least 6 characters"),
  email: yup
    .string()
    .require("Email required"),
  zipcode: yup
    .string()
    .require("Zipcode is required"),
  password: yup
    .string()
    .require("Password required")
    .min("Password must be between 8-16 characters")
    .max("Password must be between 8-16 characters"),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
})