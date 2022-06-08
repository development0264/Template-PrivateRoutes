import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Please enter first name")
        .min(2, "Please enter valid first name")
        .max(20, "Please enter valid first name")
        .matches(/^[^\s]+(\s.*)?$/, "No Blank Spaces"),
    lastName: yup
        .string()
        .required("Please enter last name")
        .min(2, "Please enter valid last name")
        .max(20, "Please enter valid last name")
        .matches(/^[^\s]+(\s.*)?$/, "No Blank Spaces"),
    email: yup.string().email().required("Please enter email"),
    password: yup
        .string()
        .min(6, "Password is too, short.")
        .max(20, "Password is too long.")
        .required("This field is required.")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
            "Must Contain 8 Characters, 2 Number and 2 special case Character and no blank space allowed"
        ),
    confirmPassword: yup
        .string()
        .required("This field is required.")
        .oneOf([yup.ref("password")], "Passwords does not match"),
    phoneNumber: yup
        .string()
        .required("Phone Number is Required")
        .matches(
            /^(\+\d{1,3}[- ]?)?\d{10}$/,
            "Phone number must be of 10 digits!"
        ),
});
export const LoginEmailSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email"),
    password: yup
        .string()
        .min(6, "Password is too, short.")
        .max(20, "Password is too long.")
        .required("This field is required.")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
            "Must Contain 8 Characters, 2 Number and 2 special case Character and no blank space allowed"
        ),
});
export const LoginNumberSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .required("Phone Number is Required")
        .matches(
            /^(\+\d{1,3}[- ]?)?\d{10}$/,
            "Phone number must be of 10 digits! "
        ),
    password: yup
        .string()
        .min(6, "Password is too, short.")
        .max(20, "Password is too long.")
        .required("This field is required.")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
            "Must Contain 8 Characters, 2 Number and 2 special case Character and no blank space allowed"
        ),
});

export default {};
