import { Grid, Group, Image, TextInput } from '@mantine/core'
import React from 'react'
import Logo from '../../assets/logo.png'
import {IconSearch} from '@tabler/icons'

function TopNav() {
    return (
        <Grid sx={{ marginTop: 10, paddingInline: 30 }}>
            <Grid.Col span={4}>
                <div style={{ width: 120 }}>
                    <Image src={Logo} alt='logo' />
                </div>
            </Grid.Col>
            <Grid.Col span={4}>
            <TextInput  placeholder="Search"  />
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={2}></Grid.Col>

        </Grid>
    )
}

export default TopNav