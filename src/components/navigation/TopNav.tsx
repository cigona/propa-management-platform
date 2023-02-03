import { Avatar, Burger, Grid, Group, Image, MediaQuery, TextInput, useMantineTheme } from '@mantine/core'
import React from 'react'
import Logo from '../../assets/logo.png'
import { IconSearch } from '@tabler/icons'
import { Bell, MagnifyingGlass } from 'phosphor-react'
import ProfileMenu from '../menu/ProfileMenu'

type props = {
    opened: boolean;
    openNavbar: (opened: boolean) => void
}

function TopNav({ openNavbar, opened }: props) {
    const theme = useMantineTheme();
    return (
        <Group sx={{ paddingInline: 18, justifyContent: 'space-between' }}>
            <Group spacing={10}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => openNavbar(!opened)}
                        size="sm"
                        color={theme.black}
                        mr="xl"
                    />
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <div style={{ width: 120 }}>
                        <Image src={Logo} alt='logo' />
                    </div>
                </MediaQuery>
            </Group>
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <div style={{ width: 350 }}>
                    <TextInput color='dark' icon={<MagnifyingGlass color='#000000' size={14} />} placeholder="Search" />
                </div>
            </MediaQuery>

            <Group sx={{ justifyContent: 'end' }}>
                <Avatar><Bell size={16} /></Avatar>
                <ProfileMenu />
            </Group>
        </Group>
    )
}

export default TopNav