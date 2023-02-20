import { Button, Center, Grid, Group, Radio, Space, Text, useMantineTheme } from '@mantine/core'
import { ArrowRight } from 'phosphor-react'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'
import { Formik, Form } from 'formik'
import { userSchema } from '../../lib/validators/user.validator'
import { useAuthStore } from '../../lib/store/auth'
import { User } from '../../lib/types/user/user.type'


type props = {
    action: () => void
}


function CreateProfileView({ action }: props) {
    const theme = useMantineTheme()

    const createUser  = useAuthStore((state) => state.createUser)

    const submitData = async (profile: User) => {
        // delete profile.manager;
        // delete profile.owner;
        const userData = await createUser(profile);
        console.log('User Data', profile)
        if(userData !== undefined) {
            action();
        }
    }


    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}` }}>
            <Space h='xl' />
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    country_id: '',
                    city_id: '',
                    postal_address: '',
                    postal_code: '',
                    email: '',
                    phone_number: '',
                    role: 'owner',
                    password: ''
                }}
                onSubmit={(values) => { 
                    const profile: User = {
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email.toLowerCase(),
                        phone: values.phone_number,
                        password: values.password,
                        manager: values.role === 'manager' ? true : false,
                        owner: values.role === 'owner' ? true : false
                    }
                    submitData(profile);
                 }}
                validationSchema={userSchema}
            >
                {({ errors, touched, handleSubmit, values, handleChange, isValid }) => (
                    <Form>
                        <Grid>
                            <Grid.Col sm={12} md={6}>
                                <Text weight={600} color={theme.colors.gray[7]}>Select your role</Text>
                                <Group sx={{ marginBlock: 24 }}>
                                    <StyledRadioButton name='role' value={values.role}  onChange={() => {values.role = 'owner'}} label='I am a property owner' description='I have the legal ownership of a property.' />
                                    <StyledRadioButton name='role' value={values.role} onChange={() => {values.role = 'manager'}} label='I am a property manager' description='I manage the day-to-day operations in a property.' />
                                </Group>

                                <Space h='xl' />
                                <Space h='xl' />

                                <Text weight={600} color={theme.colors.gray[7]}>Enter Your Details</Text>
                                <Space h='xl' />

                                <Grid>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledTextInput onChange={handleChange} errors={touched && errors.first_name} withAsterisk name='first_name' label='First Name' placeholder='John' />
                                    </Grid.Col>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledTextInput errors={touched && errors.last_name} onChange={handleChange} onBlur={() => { console.log(values) }} name='last_name' label='Last Name' placeholder='John' />
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <StyledTextInput onChange={handleChange} errors={touched && errors.phone_number} name='phone_number' label='Phone Number' />
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <StyledTextInput onChange={handleChange} errors={touched && errors.email} name='email' type='email' label='Email Address' />
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <StyledTextInput onChange={handleChange} errors={touched && errors.password} name='password' label='Password' type='password' />
                                    </Grid.Col>
                                    <Space h='xl' />
                                    <Grid.Col span={12}>
                                        <Button fullWidth disabled={!isValid} onClick={() => handleSubmit()} color='orange'>Create account for owner</Button>
                                        <Space h='xl' />
                                        <Text color='gray' align='center' size='sm'>By continuing you agree to our Terms of Service.</Text>
                                        <Space h='xl' />
                                        <Button rightIcon={<ArrowRight />} fullWidth variant='white' color='orange'>I already have an account</Button>

                                    </Grid.Col>
                                </Grid>

                            </Grid.Col>

                            <Grid.Col sm={12} md={6}>
                                <Center sx={{ minHeight: '80vh', width: '100%', backgroundColor: theme.colors.gray[2] }}>
                                    Marketing content goes here
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateProfileView