import * as yup from "yup";
export default yup.object().shape({
    uname: yup.string().required("Username required"),
    psw: yup.string().required("Password required"),
    //Checkboxes
    remember: yup.boolean(),
});