import * as yup from "yup";
export default yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().required("Password required"),
    //Checkboxes
    remember: yup.boolean(),
});