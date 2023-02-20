import { boolean, object, string } from 'yup'

export const userSchema = object({
    first_name: string().required('Please enter your first name'),
    last_name: string().required('Please enter your last name'),
    // country_id: string(),
    // city_id: string(),
    // postal_address: string(),
    // postal_code: string(),
    email: string().required('Please enter your email address').email('Please enter a valid email'),
    phone_number: string().required('Please enter your phone number').min(10).max(13),
    // role: boolean().required('Select a role'),
    password: string().required("enter a password").min(6, 'Your password must be at least 6 characters long')
})