import { Avatar, Card, Group, Space, Text } from '@mantine/core'
import React from 'react'

type props = {
  label: string;
  value: string;
}

function DashboardCard({label, value}: props) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group sx={{justifyContent: 'space-between'}}>
        <div>
          <Text color='gray'>{label}</Text>
          <Space h='sm' />
          <Text sx={{ fontSize: 24 }} color='dark' weight={900} size='xl'>{value}</Text>
        </div>
        <div style={{width: 36, height: 36, borderRadius: 18, backgroundColor: '#F2F4F7', top: 0}}/>
      </Group>

    </Card>
  )
}

export default DashboardCard