import { AppShell, Navbar, Header, Text } from '@mantine/core';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import SideNav from '../components/navigation/SideNav';
import TopNav from '../components/navigation/TopNav';


type Props = {
    children: ReactNode
}


export default function MainLayout({ children }: Props) {
    return (
        <AppShell
            padding="md"
            navbar={<Navbar width={{ base: 300 }} height={'100vh'} p="lg"><SideNav/></Navbar>}
            header={<Header height={64} p="m"><TopNav/></Header>}
            styles={(theme) => ({
                // main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white[0] },
            })}
        >
            {children}
        </AppShell>

    );
}