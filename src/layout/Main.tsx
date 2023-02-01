import { AppShell, Navbar, Header, Text } from '@mantine/core';
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'


type Props = {
    children: ReactNode
}

const queryClient = new QueryClient()

export default function MainLayout({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            <AppShell
                padding="md"
                navbar={<Navbar width={{ base: 300 }} height={'100vh'} p="xs"><Text>Side nav content goes here</Text></Navbar>}
                header={<Header height={60} p="xs"><Text>Top nav content goes here</Text></Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                {children}
            </AppShell>
        </QueryClientProvider>

    );
}