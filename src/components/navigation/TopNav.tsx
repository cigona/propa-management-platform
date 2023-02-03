import { Avatar, Grid, Group, Image, TextInput } from '@mantine/core'
import React from 'react'
import Logo from '../../assets/logo.png'
import { IconSearch } from '@tabler/icons'
import { Bell, MagnifyingGlass } from 'phosphor-react'
import ProfileMenu from '../menu/ProfileMenu'



function TopNav() {
    return (
        <Group sx={{ marginTop: 10, paddingInline: 18, justifyContent: 'space-between' }}>
            <div style={{ width: 120 }}>
                <Image src={Logo} alt='logo' />
            </div>
            <div style={{ width: 350 }}>
                <TextInput color='dark' icon={<MagnifyingGlass color='#000000' size={14} />} placeholder="Search" />
            </div>

            <Group sx={{ justifyContent: 'end' }}>
                <Avatar><Bell size={20} /></Avatar>
                <ProfileMenu />
            </Group>
        </Group>
    )
}

export default TopNav