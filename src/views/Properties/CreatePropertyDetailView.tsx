import { Avatar, Button, Center, Grid, Group, Radio, Space, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { CardSection } from '@mantine/core/lib/Card'
import { ArrowRight, Lightning, Question } from 'phosphor-react'
import { ReactNode } from 'react'
import AddUserToPropertyCard from '../../components/cards/AddUserToPropertyCard'
import StyledRadioButton from '../../components/inputs/StyledRadioButton'
import StyledTextInput from '../../components/inputs/StyledTextInput'

type props = {action: () => void}




function CreatePropertyDetailsView({action}: props) {
    const theme = useMantineTheme()


    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}` }}>
        <Space h='xl' />
        <Grid>
            <Grid.Col sm={12} md={6}>
                <Text weight={600} color={theme.colors.gray[7]}></Text>
                <Space h='xl' />
                <Space h='xl' />
                
                
                <AddUserToPropertyCard title={'Owner'} cta={'Assign Owner'} onClick={function (id: string): void {
                            throw new Error('Function not implemented.')
                        } } users={[]}  />
                        <Space h='xl' />
                    <AddUserToPropertyCard title={'Manager'} cta={'Assign Manager'} onClick={function (id: string): void {
                            throw new Error('Function not implemented.')
                        } } users={[]}  />   

                <Space h='xl' />
                <Space h='xl' />

                <Text weight={600} color={theme.colors.gray[7]}>Enter Your Details</Text>
                <Space h='xl' />
             

            </Grid.Col>

            <Grid.Col sm={12} md={6}>
            <Grid>
            <Grid.Col span={12}>
                        <StyledTextInput label='Property Name' placeholder='Enter the Property Name'/>
                        <Space h = 'md'/>
                        <StyledTextInput label='Physical Address' placeholder='Enter the Physical Address of the Property' />
                   </Grid.Col>

                    <Grid.Col sm={12} md={6}>
                    <StyledTextInput label='Postal Address' placeholder='Enter the Postal Address' />
                    <Space h = 'md'/>
                    <StyledTextInput label='Postal Code' placeholder='0000' />
                    </Grid.Col>

                    <Space h = 'x1'/>        
                    <Space h = 'x1'/>

                    <Grid.Col sm={12} md={6}>
                        <StyledTextInput label='City' placeholder='Nairobi' />
                        <Space h = 'md'/>
                        <StyledTextInput label='Country' placeholder='Kenya' />
                    </Grid.Col>

                    <div style={{height : 240, width : '100%'}}>
                        
                    </div>

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

export default CreatePropertyDetailsView 