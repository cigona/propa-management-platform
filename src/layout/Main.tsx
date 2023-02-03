import { AppShell, Navbar, Header, Container } from '@mantine/core';
import { ReactNode, useState } from 'react';
import SideNav from '../components/navigation/SideNav';
import TopNav from '../components/navigation/TopNav';


type Props = {
    children: ReactNode
}


export default function MainLayout({ children }: Props) {
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            padding="md"
            navbar={<Navbar hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} hidden={!opened}  p="lg"><SideNav /></Navbar>}
            header={<Header height={64} p="md"><TopNav opened={opened} openNavbar={setOpened} /></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white' },
            })}
        >
            {/* <Container sx={{minHeight: '100vh'}} size='xl'> */}
                {children}
            {/* </Container> */}
        </AppShell>

    );
}