import { boolean, object, string } from 'yup'

export const userSchema = object({
    first_name: string().required('Please enter your first name'),
    last_name: string().required('Please enter your last name'),
    country_id: string().required('Please select your country'),
    city_id: string().required('Please select your city'),
    postal_address: string().required('Please enter your postal address'),
    postal_code: string().required('Please enter your postal code'),
    email: string().required('Please enter your email address').email('Please enter a valid email'),
    phone_number: string().required('Please enter your phone number').min(10).max(13),
    isManager: boolean().required('Select a role'),
    password: string().required("enter a password").min(6, 'Your password must be at least 6 characters long')
})