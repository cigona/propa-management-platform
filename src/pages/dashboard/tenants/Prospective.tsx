import React from 'react'
import PageHeader from '../../../components/headers/PageHeader'
import MainLayout from '../../../layout/Main'
import DashboardCardsView from '../../../views/DashboardCardsView'

function Prospective() {
    return (
        <MainLayout>
            <PageHeader title='Prospective Tenants' buttonText='Add Tenant' />
            <DashboardCardsView />
        </MainLayout>
    )
}

export default Prospective