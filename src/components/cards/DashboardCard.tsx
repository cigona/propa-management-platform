import { Card, Text } from '@mantine/core'
import React from 'react'

function DashboardCard() {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text color='gray'>Label</Text>
        <Text sx={{fontSize: 40}} color='dark' weight={900} size='xl'>0000</Text>
    </Card>
  )
}

export default DashboardCard