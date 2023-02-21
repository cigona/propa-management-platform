import { Avatar, Button, Card, Grid, Group, Menu, Popover, Text, useMantineTheme } from '@mantine/core'
import { PersonSimple, Plus } from 'phosphor-react';


type props = {
    title: string;
    cta: string;
    onClick: (id: string) => void;
    users: { id: string, name: string }[]
}

function AddUserToPropertyCard({ title, cta, onClick, users }: props) {
    const theme = useMantineTheme();

    const handleClick = (id: string) => {
        onClick(id)
    }

    return (
        <Card shadow='sm' withBorder sx={{ background: 'white', padding: 16, borderRadius: 8 }}>
            <Grid sx={{ justifyContent: 'space-between', }}>
                <Grid.Col span={6} >
                    <Text weight={600} size='md'>{title}</Text>
                    <Avatar mt={12} size={64} sx={{ borderRadius: '50%' }} color='dark' />
                </Grid.Col>
                <Grid.Col span={6} sx={{ display: 'grid', justifyItems: 'end' }} >
                    <Menu shadow="md">
                        <Menu.Target>
                            <Button variant='white' color='orange' leftIcon={<Plus size={16} />} >{cta}</Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label><Text color='dark' weight={600}>{cta}</Text></Menu.Label>
                            <Button variant='white' color='orange' size='sm' leftIcon={<Plus size={16} />} >Add a new {title}</Button>
                            <Menu.Divider />
                            {users?.map((user) => (
                                <Menu.Item onClick={() => handleClick(user.id)} key={user.id}>
                                    <Group>
                                        <Avatar><PersonSimple /></Avatar>
                                        <Text size='sm'>{user.name}</Text>
                                    </Group>
                                </Menu.Item>
                            ))}

                            <Menu.Item >
                                <Group>
                                    <Avatar><PersonSimple /></Avatar>
                                    <Text size='sm'>Jane Doe</Text>
                                </Group>
                            </Menu.Item>
                            <Menu.Item >
                                <Group>
                                    <Avatar><PersonSimple /></Avatar>
                                    <Text size='sm'>Jane Doe</Text>
                                </Group>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default AddUserToPropertyCard