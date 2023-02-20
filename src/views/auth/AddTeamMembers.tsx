import { Button, Center, Container, Grid, Group, Select, Space, Text } from '@mantine/core'
import { FieldArray, Form, Formik } from 'formik';
import { Trash } from 'phosphor-react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopBorderContainer from '../../components/containers/TopBorderContainer'
import StyledTextInput from '../../components/inputs/StyledTextInput';

function AddTeamMembers() {

    const [inputCount, setInputCount] = useState(0);

    const navigate = useNavigate()

    const increaseCount = () => {
        let newCount = inputCount;
        newCount++
        setInputCount(newCount);
    }

    const complete = () => {
        navigate('/setup-complete')
    }

    return (
        <TopBorderContainer>
            <div style={{ display: 'grid', placeItems: 'center', minWidth: '50vw', }}>
                <Text size='xl' color='dark' align='center' weight={600}>Add company employees</Text>
                <Text size='xl' color='dark' align='center' >Sent invites to your team.</Text>
                <Space h='xl' />
                <Container size='md' >
                    <Formik
                        initialValues={{
                            members: [] as { email: string, access: string }[]
                        }}
                        onSubmit={values => {

                        }}
                    >
                        {({ values }) => (<Form>
                            <FieldArray
                                name="members"
                                render={arrayHelpers => (
                                    <div>
                                        {values.members && values.members.map((member, i) => (
                                            <Grid sx={{ alignItems: 'center', minWidth: '45vw' }} >
                                                <Grid.Col span={8}>
                                                    <StyledTextInput label='Email Address' type='email' />
                                                </Grid.Col>
                                                <Grid.Col span={3}>
                                                    <Select
                                                        label=""
                                                        placeholder=""
                                                        data={[
                                                            { value: 'full', label: 'Full Access' },
                                                            { value: 'view', label: 'View Only' },

                                                        ]}
                                                        size='lg'
                                                        defaultValue={'full'}
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={1}>
                                                    <Button onClick={() => arrayHelpers.pop()} variant='white' color='dark'><Trash size={24} /></Button>
                                                </Grid.Col>
                                            </Grid>
                                        ))}
                                        <Space h='xl' />
                                        <Button onClick={() => arrayHelpers.push({})} color='orange'>{values.members && values.members.length > 0 ? "Add Another" : "Add a new member"}</Button>
                                        <Space h='xl' />
                                        {values.members && values.members.length > 0 && <Button fullWidth onClick={complete} color='orange'>Send Invites</Button>}
                                        <Space h='xl' />
                                        <Button fullWidth onClick={complete} variant='white' color='orange'>Skip for now</Button>
                                    </div>

                                )}
                            />
                        </Form>)}
                    </Formik>

                </Container>

            </div>






        </TopBorderContainer >
    )
}

export default AddTeamMembers