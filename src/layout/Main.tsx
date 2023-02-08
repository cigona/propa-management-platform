import { AppShell, Navbar, Header, Text, Container } from '@mantine/core';
import { ReactNode } from 'react';
import SideNav from '../components/navigation/SideNav';
import TopNav from '../components/navigation/TopNav';


type Props = {
    children: ReactNode
}


export default function MainLayout({ children }: Props) {
    return (
        <AppShell
            padding="md"
            navbar={<Navbar width={{ base: 300 }} height={'100vh'} p="lg"><SideNav /></Navbar>}
            header={<Header height={64} p="m"><TopNav /></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white' },
            })}
        >
            <Container size='xl'>
                {children}
            </Container>
        </AppShell>

    );
}