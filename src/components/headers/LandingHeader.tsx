import { Button, Group, Text } from '@mantine/core'
import React from 'react'

function LandingHeader() {
  return (
    <Group sx={{justifyContent: 'space-between'}}>
        <Group spacing={16}>
            <Text weight={600} size='sm'>Features</Text>
            <Text weight={600} size='sm'>Company</Text>
            <Text weight={600} size='sm'>Pricing</Text>
            <Text weight={600} size='sm'>Updates</Text>
        </Group>
        <Group spacing={16}>
            <Button variant='white' size='sm' color='orange'>Login</Button>
            <Button color='orange' size='sm'>Sign Up</Button>
        </Group>
    </Group>
  )
}

export default LandingHeader