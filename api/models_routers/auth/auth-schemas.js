const yup = require("yup")

const userSchema = yup.object.shape({
    email: yup
    .string()
    .typeError("email address must be a string")
    .email("must be a valid email address ")
    .max(255, "email cannot belonger than 255 chars")
    .required("email is required")
    
})
