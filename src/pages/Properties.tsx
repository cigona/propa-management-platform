import { Button, Container, Grid, Space, Tabs, Text } from '@mantine/core'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons'
import React from 'react'
import MainLayout from '../layout/Main'
import { accountsData } from '../lib/types/accounts.type'
import DashboardCardsView from '../views/DashboardCardsView'
import { AccountingTableView } from '../views/Properties/AccountingTableView'

const mockData: accountsData[] = [
    {
        id: '1',
        property: 'Property name',
        grossIncome: 2000000,
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '2',
        property: 'Property name',
        grossIncome: 2000000,
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '3',
        property: 'Property name',
        grossIncome: 2000000,
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '4',
        property: 'Property name',
        grossIncome: 2000000,
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
]
function Properties() {
    return (
        <MainLayout>
            <Grid sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <Grid.Col span={4}>
                    <Text weight={800} sx={{ fontSize: 30 }} size={'xl'} color='dark'>Properties</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color='orange'>Add Property</Button>
                </Grid.Col>
            </Grid>
            <Space h='lg' />
            {/* tabs */}
            <Tabs color="red" defaultValue="overview">
                <Tabs.List>
                    <Tabs.Tab value="overview" >Overview</Tabs.Tab>
                    <Tabs.Tab value="accounting" >Accounting</Tabs.Tab>
                    <Tabs.Tab value="utilities" >Utilities</Tabs.Tab>
                    <Tabs.Tab value="maintenance">Maintenance</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" pt="xl">
                    <DashboardCardsView />
                    <Space h='xl' />
                    <AccountingTableView data={mockData} />
                </Tabs.Panel>

                <Tabs.Panel value="accounting" pt="xl">
                    <DashboardCardsView />
                    <Space h='xl' />
                    <AccountingTableView data={mockData} />
                </Tabs.Panel>

                <Tabs.Panel value="utilities" pt="xl">
                    Utilities
                </Tabs.Panel>
                <Tabs.Panel value="maintenance" pt="xl">
                    Maintenance
                </Tabs.Panel>
            </Tabs>
        </MainLayout>
    )
}

export default Properties