import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import MainLayout from '../../layout/Main'
import { fetchUsers } from '../../lib/api/test'
import { Grid, Text } from '@mantine/core'
import { User } from '../../lib/types/user.type'
import { UserCard } from '../../components/cards/card'
import DashboardCard from '../../components/cards/DashboardCard'
import DashboardCardsView from '../../views/DashboardCardsView'



function Home() {
    const query = useQuery('todos', fetchUsers)

    return (
        <MainLayout>
            <DashboardCardsView />
        </MainLayout>
    )
}

export default Home