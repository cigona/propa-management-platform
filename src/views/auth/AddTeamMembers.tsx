import { Button, Center, Container, Grid, Group, Select, Space, Text } from '@mantine/core'
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
                        <Grid sx={{alignItems: 'center', minWidth: '45vw'}} >
                            <Grid.Col span={8}>
                                <StyledTextInput label='Email Address' type='email' />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Select
                                    label=""
                                    placeholder=""
                                    data={[
                                        { value: 'full', label: 'Full Access' },
                                        { value: 'view', label: 'View Only' },

                                    ]}
                                    size='xl'
                                    defaultValue={'full'}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid sx={{alignItems: 'center', minWidth: '45vw'}} >
                            <Grid.Col span={8}>
                                <StyledTextInput label='Email Address' type='email' />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Select
                                    label=""
                                    placeholder=""
                                    data={[
                                        { value: 'full', label: 'Full Access' },
                                        { value: 'view', label: 'View Only' },

                                    ]}
                                    size='xl'
                                    defaultValue={'full'}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid sx={{alignItems: 'center', minWidth: '45vw'}} >
                            <Grid.Col span={8}>
                                <StyledTextInput label='Email Address' type='email' />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Select
                                    label=""
                                    placeholder=""
                                    data={[
                                        { value: 'full', label: 'Full Access' },
                                        { value: 'view', label: 'View Only' },

                                    ]}
                                    size='xl'
                                    defaultValue={'full'}
                                />
                            </Grid.Col>
                        </Grid>
                        <Space h='xl'/>
                        <Button color='orange'>Add Another</Button>
                        <Space h='xl'/>
                        <Button fullWidth onClick={complete} color='orange'>Send Invites</Button>
                        <Space h='xl'/>
                        <Button  fullWidth onClick={complete}  variant='white' color='orange'>Skip for now</Button>

                    </Container>

            </div>






        </TopBorderContainer >
    )
}

export default AddTeamMembers