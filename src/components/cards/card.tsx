import { Card, Image, Text, Badge, Button, Group, Avatar, Center } from '@mantine/core';
import { User } from '../../lib/types/user/user.type';

type props = {
    user: User
}

export function UserCard({ user }: props) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Center>
                    <Avatar c='blue'>{user.name.charAt(0)}</Avatar>
                </Center>
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{user.name}</Text>
                <Badge color="blue" variant="light">
                    verified
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                {user.email}
            </Text>
            <Text size="sm" color="dimmed">
                Company: {user.company.name}
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                View More
            </Button>
        </Card>
    );
}