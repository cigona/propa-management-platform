import { Avatar, Button, Center, Grid, Group, Radio, Space, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { ArrowRight, Lightning, Question } from 'phosphor-react'
import { ReactNode } from 'react'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'

type props = {action: () => void}




function CreatePropertyTypeView({action}: props) {
    const theme = useMantineTheme()


    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}` }}>
            <Space h='xl' />
            <Grid>
            <Grid.Col sm={12} md={6}>
                    <Text weight={600} color={theme.colors.gray[7]}>Choose your property type</Text>
                    <Group>
                    <Button color='orange'>Invite Manager</Button>
                    <Space h='md' />
                    <Button color='orange'>Add Team</Button>
                    <Space h='md' />
                    </Group>
                    

                    <Group sx={{ marginBlock: 24 }}>
                        <StyledRadioButton label='Residential' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                        <StyledRadioButton label='Commercial' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                    </Group>
                

                    <Space h='xl' />
                    <Space h='xl' />
            

                    <UnstyledButton>
                    <Group>
                    <Question size={40} color="black"/>
                    <div>
                    <Text td="underline">Need Help Setting up your Properties?</Text>
                    </div>
                    </Group>
                    </UnstyledButton>

                    </Grid.Col>
                   
            </Grid>
        </div>
    )
}

export default CreatePropertyTypeView