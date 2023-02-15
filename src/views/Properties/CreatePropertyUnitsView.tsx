import { Avatar, Button, Center, Grid, Group, Radio, Space, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { CardSection } from '@mantine/core/lib/Card'
import { ArrowRight, Lightning, Question } from 'phosphor-react'
import { ReactNode } from 'react'
import AddUserToPropertyCard from '../../components/cards/AddUserToPropertyCard'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'

type props = {action: () => void}




function CreatePropertyUnitsView({action}: props) {
    const theme = useMantineTheme()


    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}` }}>
        <Space h='xl' />
        <Grid>
            
                <Text weight={600} color={theme.colors.gray[7]}>Enter your property details</Text>
                
            
            <Grid.Col sm={12} md={6}>
            <Grid>
            <Grid.Col span={12}>
                        <StyledTextInput label='' placeholder='Group name'/>
                        <StyledTextInput label='Physical Address' placeholder='Enter the Physical Address of the Property' />
                   </Grid.Col>

                    <Grid.Col sm={12} md={6}>
                    <StyledTextInput label='Postal Address' placeholder='Enter the Postal Address' />
                    <StyledTextInput label='Postal Code' placeholder='0000' />
                    </Grid.Col>

                    <Space h = 'x1'/>        
                    <Space h = 'x1'/>

                    <Grid.Col sm={12} md={6}>
                        <StyledTextInput label='City' placeholder='Nairobi' />
                        <StyledTextInput label='Country' placeholder='Kenya' />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <StyledTextInput label='' type=''/>
                    </Grid.Col>
                    <Space h='xl' />
                    
                </Grid>
            </Grid.Col>
        </Grid>
    </div>
    )
}

export default CreatePropertyUnitsView