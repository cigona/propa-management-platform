import React from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import MainLayout from '../../../layout/Main'
import { mockOverviewData } from '../../../lib/mock-data/PropertiesData'
import DashboardCardsView from '../../../views/DashboardCardsView'
import { ActiveTenantsTableView } from '../../../views/Tenants/ActiveTenantsTableView'


function Active() {
  return (
    <MainLayout>
        <PageHeader title='Active Tenants' buttonText='Add Tenant' />
        <DashboardCardsView />
        <ActiveTenantsTableView data={mockOverviewData} />
    </MainLayout>
  )
}

export default Active