import { Menu, Button, Text, Avatar } from '@mantine/core';
import { CaretDown } from 'phosphor-react';


export default function ProfileMenu() {
  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Button size='sm' rightIcon={<CaretDown size={20} weight="thin" />} variant='outline' color='dark'><Avatar></Avatar></Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item >Settings</Menu.Item>
        <Menu.Item >Messages</Menu.Item>
        <Menu.Item >Gallery</Menu.Item>
        <Menu.Item
          rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item >Transfer my data</Menu.Item>
        <Menu.Item color="red">Delete my account</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}