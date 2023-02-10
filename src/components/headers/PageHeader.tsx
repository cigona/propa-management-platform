import { Group, Button, MediaQuery, Space, Text } from '@mantine/core'
import { ChatText, PresentationChart, PlusCircle } from 'phosphor-react'


type props = {
    title: string;
    buttonText: string;
    buttonAction?: () => void;
}

function PageHeader({title, buttonText, buttonAction}: props) {
    return (
        <div>
            <Group sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>
                <Text weight={700} sx={{ fontSize: 24 }} color='dark'>{title}</Text>
                <Group sx={{ justifyContent: 'end' }} spacing={5}>
                    <Button size='sm' variant='outline' color='dark' sx={{ borderRadius: 10 }}><ChatText size={16} /></Button>
                    <Button size='sm' variant='outline' color='dark' sx={{ borderRadius: 10 }}><PresentationChart size={16} /></Button>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Button size='sm' color='orange'><PlusCircle /></Button>
                    </MediaQuery>
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Button size='sm' color='orange'>{buttonText}</Button>
                    </MediaQuery>
                </Group>
            </Group>
            <Space h='lg' /></div>
    )
}

export default PageHeader