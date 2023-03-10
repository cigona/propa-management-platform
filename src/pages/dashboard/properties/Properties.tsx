import { Button, Container, Grid, Group, MediaQuery, ScrollArea, Space, Tabs, Text } from '@mantine/core'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons'
import { Buildings, ChatText, PlusCircle, PresentationChart } from 'phosphor-react'
import React from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import MainLayout from '../../../layout/Main'
import { accountsData, OverviewData } from '../../../lib/types/properties.type'
import DashboardCardsView from '../../../views/DashboardCardsView'
import { AccountingTableView } from '../../../views/Properties/AccountingTableView'
import { OverviewTableView } from '../../../views/Properties/OverviewTableView'
import { UtilitiesTableView } from '../../../views/Properties/UtilitiesTableView'

const mockData: accountsData[] = [
    {
        id: '1',
        property: 'Property name',
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '2',
        property: 'Property name',
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '3',
        property: 'Property name',
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
    {
        id: '4',
        property: 'Property name',
        expenses: 3000000,
        netIncome: 20000,
        outstandingRent: 300000
    },
]
const mockOverviewData: OverviewData[] = [
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
            <PageHeader title='Properties' buttonText='Add Property' />
            {/* tabs */}
            <Tabs color="orange" defaultValue="overview">

                <Tabs.List >
                    <Tabs.Tab value="overview" >Overview</Tabs.Tab>
                    <Tabs.Tab value="accounting" >Accounting</Tabs.Tab>
                    <Tabs.Tab value="utilities" >Utilities</Tabs.Tab>
                    <Tabs.Tab value="maintenance">Maintenance</Tabs.Tab>
                </Tabs.List>


                <Tabs.Panel value="overview" pt="xl">
                    <DashboardCardsView />
                    <Space h='xl' />
                    <OverviewTableView data={mockOverviewData} />
                </Tabs.Panel>

                <Tabs.Panel value="accounting" pt="xl">
                    <DashboardCardsView />
                    <Space h='xl' />
                    <AccountingTableView data={mockData} />
                </Tabs.Panel>

                <Tabs.Panel value="utilities" pt="xl">
                <DashboardCardsView />
                    <Space h='xl' />
                    <UtilitiesTableView data={mockOverviewData} />
                </Tabs.Panel>
                <Tabs.Panel value="maintenance" pt="xl">
                    Maintenance
                </Tabs.Panel>
            </Tabs>
        </MainLayout>
    )
}

export default Properties