const yup = require("yup")

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const userSchema = yup.object().shape({
    email: yup
    .string()
    .typeError("email address must be a string")
    .email("must be a valid email address ")
    .max(255, "email cannot belonger than 255 chars")
    .required("email is required"),
    password: yup
    .string()
    .typeError("password must be a string")
    .min(8, "password must be at least 8 chars")
    .max(30, "password cannot be longer than 30 chars")
    .required("password is required"),
    first_name: yup
    .string()
    .typeError("first name must be a string")
    .min(1, "first name must be at least 1 char")
    .max(50, "first name cannot be longer than 30 chars")
    .required("first name is required"),
    last_name: yup
    .string()
    .typeError("last name must be a string")
    .min(1, "last name must be at least 1 char")
    .max(50, "last name cannot be longer than 30 chars")
    .required("last name is required"),
    phone_number: yup
    .string()
    .typeError("phone number must be a string")
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("last name is required")
})

module.exports = { userSchema }
