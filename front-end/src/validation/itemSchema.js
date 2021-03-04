import * as yup from 'yup'

export default yup.object().shape({
  item_name: yup.string().required("What are you renting?"),
  price: yup.string().required("How much is your rental per day?"),
  category: yup.string().required("Please select a category").oneOf(["camera", "television", "party-equipment"]),
  owner_username: yup.string().required("What is your username?")
})