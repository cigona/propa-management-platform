import { Avatar, Button, Grid, Group, Space, Text, useMantineTheme } from '@mantine/core'
import { Form, Formik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import TopBorderContainer from '../../components/containers/TopBorderContainer'
import StyledRadioButton from '../../components/inputs/StyledRadioButton';
import StyledSelectInput from '../../components/inputs/StyledSelectInput';
import StyledTextInput from '../../components/inputs/StyledTextInput';
import { useLocationStore } from '../../lib/store/location';
import { SelectValue } from '../../lib/types/inputs/select.type';

type props = {
    action: () => void
}

function AddProfileDetailsView({ action }: props) {
    const theme = useMantineTheme();

    const fetchCities = useLocationStore((state) => state.fetchCities)
    const cityData = useLocationStore((state) => state.cities)
    const fetchCountries = useLocationStore((state) => state.fetchCountries)
    const countryData = useLocationStore((state) => state.countries)

    const [countrySelectData, setCountrySelectData] = useState([] as SelectValue[])
    const [citySelectData, setCitySelectData] = useState([] as SelectValue[])


    useEffect(() => {
        fetchCountries()
    }, [])

    useEffect(() => {
        const selectData = [] as { value: string, label: string }[]
        countryData.returned_resultset && countryData.returned_resultset.forEach((value, index, array) => {
            selectData.push({ value: value.id.toString(), label: value.name })
        })
        setCountrySelectData(selectData);
    }, [countryData])

    useEffect(() => {
        const selectData = [] as { value: string, label: string }[]
        cityData.returned_resultset && cityData.returned_resultset.forEach((value, index, array) => {
            selectData.push({ value: value.id.toString(), label: value.name })
        })
        setCitySelectData(selectData);
    }, [cityData])




    return (
        <TopBorderContainer>
            <Formik
                initialValues={{
                    postalAddress: '',
                    postalCode: '',
                    country: '',
                    city: '',
                    nationalId: '',
                    kraPin: '',
                    userType: '0'
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ values, handleBlur, handleSubmit, handleChange }) => (
                    <Form>
                        <Grid >
                            <Grid.Col p={16} sm={12} md={6}>
                                <Text weight={600} size='xl'>A few more details</Text>
                                <Space h='xl' />
                                <Text weight={600} color={theme.colors.gray[7]} size='md'>Upload your profile photo</Text>
                                <Space h='md' />
                                <Group >
                                    <Avatar size={64} />
                                    <Button variant='outline' color='gray'><Text color='dark'>Change</Text></Button>
                                </Group>
                                <Space h='xl' />
                                <Grid>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledTextInput onChange={handleChange} name='postalAddress' label="Postal Address" type="text" />
                                    </Grid.Col>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledTextInput onChange={handleChange} name='postalCode' label="Postal Code" type="number" />
                                    </Grid.Col>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledSelectInput  name='country' onChange={(e: any) => { values.country = e; fetchCities(Number(e)) }} data={countrySelectData} label='Country' />
                                    </Grid.Col>
                                    <Grid.Col sm={12} md={6}>
                                        <StyledSelectInput disabled={values.country === ''} name='city' onChange={(e: any) => {values.city = e}} data={citySelectData} label='City' />
                                    </Grid.Col>
                                    <Grid.Col sm={12} >
                                        <StyledTextInput onChange={handleChange} name='nationalId' label="National ID" type="text" />
                                    </Grid.Col>
                                    <Grid.Col sm={12} >
                                        <StyledTextInput onChange={handleChange} name='kraPin' label="Kra Pin" type="text" />
                                    </Grid.Col>
                                </Grid>
                                <Space h='md' />
                                <Group spacing='lg'>
                                    <StyledRadioButton name='userType' onChange={(e: any) => {values.userType = '0'}} value={values.userType} label='Individual' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                                    <StyledRadioButton name='userType' onChange={(e: any) => {values.userType = '1'}} value={values.userType} label='Company' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                                </Group>
                                <Space h='xl' />
                                <Button color='orange' onClick={() => handleSubmit()} fullWidth size='lg'>Proceed as {values.userType === '0' ? 'an individual': 'a company'}</Button>
                            </Grid.Col>
                            <Grid.Col sx={{ backgroundColor: theme.colors.gray[2], height: '100vh' }} p='xl' sm={12} md={6}>
                                <Text size='md' weight={600} color='dark'>Why we collect this information</Text>
                                <Text size='md' color='dark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                                <Space h='xl' />
                                <Text size='md' weight={600} color='dark'>How we protect your privacy</Text>
                                <Text size='md' color='dark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>

                            </Grid.Col>
                        </Grid>
                    </Form>
                )}

            </Formik>

        </TopBorderContainer>
    )
}

export default AddProfileDetailsView