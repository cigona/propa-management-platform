import { Avatar, Grid, Group, Image, TextInput } from '@mantine/core'
import React from 'react'
import Logo from '../../assets/logo.png'
import {IconSearch} from '@tabler/icons'
import { Bell, MagnifyingGlass } from 'phosphor-react'
import ProfileMenu from '../menu/ProfileMenu'



function TopNav() {
    return (
        <Grid sx={{ marginTop: 10, paddingInline: 30 }}>
            <Grid.Col span={4}>
                <div style={{ width: 120 }}>
                    <Image src={Logo} alt='logo' />
                </div>
            </Grid.Col>
            <Grid.Col span={4}>
            <TextInput color='dark'  icon={<MagnifyingGlass size={14} />} placeholder="Search"  />
            </Grid.Col>
            <Grid.Col span={2}>
            </Grid.Col>
            <Grid.Col span={2}>
                <Group>
                <Avatar><Bell size={20} /></Avatar>
                <ProfileMenu />
                </Group>
            </Grid.Col>

        </Grid>
    )
}

export default TopNav