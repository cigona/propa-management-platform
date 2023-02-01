import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import MainLayout from '../layout/Main'
import { fetchUsers } from '../lib/api/test'
import { Grid, Text } from '@mantine/core'
import { User } from '../lib/types/user.type'
import { UserCard } from '../components/cards/card'



function Home() {
    const query = useQuery('todos', fetchUsers)

    return (
        <MainLayout>
            <div>Home</div>
            <Text fw={500} fz='xl'>Users</Text>
            <Grid sx={{ my: 3 }}>
                {query.data.map((user: User) => (
                    <Grid.Col key={user.id} span={4}>
                        <UserCard user={user} />
                    </Grid.Col>
                ))}
            </Grid>
        </MainLayout>
    )
}

export default Home