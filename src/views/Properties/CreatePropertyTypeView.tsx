import { Button, Center, Grid, Group, Radio, Space, Text, useMantineTheme } from '@mantine/core'
import { ArrowRight, Lightning, Question } from 'phosphor-react'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'





function CreatePropertyTypeView() {
    const theme = useMantineTheme()


    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}` }}>
            <Space h='xl' />
            <Grid>
                    <Text weight={600} color={theme.colors.gray[7]}>Choose your property type</Text>
                    
                    <Button color='orange'>Invite Manager</Button>
                    <Space h='md' />
                    <Button color='orange'>Add Team</Button>
                    <Space h='md' />
                    

                    <Group sx={{ marginBlock: 24 }}>
                        <StyledRadioButton label='Residential' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                        <StyledRadioButton label='Commercial' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                    </Group>

                    <Space h='xl' />
                    <Space h='xl' />

                    <Text weight={600} color={theme.colors.gray[7]}/>Need help setting up your properties?</Text>
                   
            </Grid>
        </div>
    )
}

export default CreatePropertyTypeView