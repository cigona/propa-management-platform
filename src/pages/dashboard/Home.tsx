import React from 'react'
import { useQuery } from 'react-query'
import MainLayout from '../../layout/Main'
import DashboardCardsView from '../../views/DashboardCardsView'



function Home() {

    return (
        <MainLayout>
            <DashboardCardsView />
        </MainLayout>
    )
}

export default Home