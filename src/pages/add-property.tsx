import { Button, Container, Grid, Group, Space, Tabs, Text } from '@mantine/core'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons'
import { ChatText, PresentationChart, FileArrowUp } from 'phosphor-react'
import React from 'react'
import MainLayout from '../layout/Main'
import { accountsData, OverviewData } from '../lib/types/properties.type'
import DashboardCardsView from '../views/DashboardCardsView'
import { AccountingTableView } from '../views/Properties/AccountingTableView'
import { OverviewTableView } from '../views/Properties/OverviewTableView'

function AddProperties() {
    return (
        <MainLayout>
            <Grid sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <Grid.Col span={4}>
                    <Text weight={800} sx={{ fontSize: 24 }} size={'xl'} color='dark'>Add Properties</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Group sx={{justifyContent: 'end'}} spacing={5}>
                        <Button color='orange' leftIcon= {<FileArrowUp size={20} />}>Upload Properties</Button>
                    </Group>

                </Grid.Col>
            </Grid>
            <Space h='lg' />
            <Tabs color="red" defaultValue="type">
                <Tabs.List>
                    <Tabs.Tab value="type" >Type</Tabs.Tab>
                    <Tabs.Tab value="details" >Details</Tabs.Tab>
                    <Tabs.Tab value="units" >Units</Tabs.Tab>
                    <Tabs.Tab value="policies">Policies</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="type" pt="xl">
                    <Space h='xl' />
                    <Text weight={800} sx={{ fontSize: 20 }} size={'xl'} color='dark'>Choose your property type</Text>
                    <Button color='#FFEEE6'>Invite Manager</Button>
                    <Button color='#FFEEE6'>Add Team</Button>

                </Tabs.Panel>

               
            </Tabs>
            
       
           
           
        </MainLayout>
    )
}

export default AddProperties