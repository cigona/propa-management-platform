import { AppShell, Navbar, Header, Container } from '@mantine/core';
import React, { ReactNode, useState } from 'react'
import LandingHeader from '../components/headers/LandingHeader';
import SideNav from '../components/navigation/SideNav';
import TopNav from '../components/navigation/TopNav';

type Props = {
    children: ReactNode
}

function OnboardingLayout({ children }: Props) {
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            padding="md"
            // header={<Header height={64} p="md"><LandingHeader /></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white' },
            })}
        >
            {children}

        </AppShell>

    );
}

export default OnboardingLayout