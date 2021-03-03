import * as yup from 'yup'

export default yup.object().shape({
  first_name: yup
    .string()
    .required("First name required")
    .min(3, "First name must be at least 3 letters"),
  last_name: yup
    .string()
    .required("Last name required")
    .min(3, "Last name must be at least 3 letters"),
  username: yup
    .string()
    .required("Username required")
    .min(6, "Username must be at least 6 characters"),
  email: yup
    .string()
    .required("Email required"),
  zipcode: yup
    .string()
    .matches(/^\d+$/, 'Numbers only')
    .min(5, "Zipcode must be 5 digits")
    .max(5, "Zipcode must be 5 digits")
    .required("Zipcode is required"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password must be between 8-16 characters")
    .max(16, "Password must be between 8-16 characters"),
  confirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], "Passwords must match"),
  role: yup
    .string()
    .oneOf(['owner', 'renter'], "User Type is required")
})