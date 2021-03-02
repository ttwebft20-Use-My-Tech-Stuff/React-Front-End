import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required("What are you renting?"),
  price: yup.string().required("How much is your rental per day?"),
  image: yup.string().required("Please provide an image url for your item.")
})