import { Center, Grid, Group, Radio, Space, Text, useMantineTheme } from '@mantine/core'
import React from 'react'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'

function CreateProfileView() {
    const theme = useMantineTheme()
    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[6]}` }}>
            <Space h='xl' />
            <Grid>
                <Grid.Col span={6}>
                    <Text weight={600} color={theme.colors.gray[7]}>Select your role</Text>
                    <Group sx={{ marginBlock: 24 }}>
                        <StyledRadioButton label='I am a property owner' description='I have the legal ownership of a property.' />
                        <StyledRadioButton label='I am a property manager' description='I manage the day-to-day operations in a property.' />
                    </Group>

                    <Space h='xl' />
                    <Text weight={600} color={theme.colors.gray[7]}>Enter Your Details</Text>
                    <Space h='xl' />
                    <Grid>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label='First Name' placeholder='John' />
                        </Grid.Col>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label='Last Name' placeholder='John' />

                        </Grid.Col>
                        <Grid.Col span={12}>
                            <StyledTextInput label='Phone Number' />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <StyledTextInput label='Email Address' />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <StyledTextInput label='Password' type='password' />
                        </Grid.Col>
                    </Grid>

                </Grid.Col>
                <Grid.Col span={6}>
                    <Center sx={{ minHeight: '100vh', width: '100%', backgroundColor: theme.colors.gray[2] }}>
                        Marketing content goes here
                    </Center>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default CreateProfileView