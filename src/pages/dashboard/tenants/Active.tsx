import React from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import MainLayout from '../../../layout/Main'
import DashboardCardsView from '../../../views/DashboardCardsView'

function Active() {
  return (
    <MainLayout>
        <PageHeader title='Active Tenants' buttonText='Add Tenant' />
        <DashboardCardsView />
    </MainLayout>
  )
}

export default Active