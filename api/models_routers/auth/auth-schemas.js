const yup = require("yup")

const userSchema = yup.object.shape({
    email: yup
    .string()
    .typeError("email address must be a string")
    .email("must be a valid email address ")
    .max(255, "email cannot belonger than 255 chars")
    .required("email is required"),
    pasword: yup
    .string()
    .typeError("password must be a string")
    .min(8, "password must be at least 8 chars")
    .max(30, "password cannot be longer than 30 chars")
    .required("password is required")
})
