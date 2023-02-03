import { Grid } from '@mantine/core'
import React from 'react'
import DashboardCard from '../components/cards/DashboardCard'

function DashboardCardsView() {
    return (
        <>
            <Grid sx={{ my: 3 }}>
                <Grid.Col span={3}>
                    <DashboardCard />
                </Grid.Col>
                <Grid.Col span={3}>
                    <DashboardCard />
                </Grid.Col>
                <Grid.Col span={3}>
                    <DashboardCard />
                </Grid.Col>
                <Grid.Col span={3}>
                    <DashboardCard />
                </Grid.Col>
            </Grid>
        </>

    )
}

export default DashboardCardsView