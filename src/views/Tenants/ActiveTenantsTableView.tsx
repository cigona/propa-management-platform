import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Space, Accordion, useMantineTheme } from '@mantine/core';
import { accountsData, OverviewData } from '../../lib/types/properties.type';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

interface TableSelectionProps {
    data: OverviewData[];
}

export function ActiveTenantsTableView({ data }: TableSelectionProps) {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(['1']);
    const theme = useMantineTheme()
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr className={cx({ [classes.rowSelected]: selected })}>
                <td>
                    <Checkbox
                        checked={selection.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Avatar />
                        <Text size="md" weight={600}>
                            Jane Doe
                        </Text>
                    </Group>
                </td>
                <td><Text color='dark' size="sm" weight={500}>Unit 10A</Text></td>
                <td><Text color='dark' size="sm" weight={500}>Negotiation</Text></td>
                <td><Text color='dark' size="sm" weight={500}>+254 123 456 789</Text></td>
            </tr>

        );
    });

    return (
        <ScrollArea>
            <Space h='xl' />
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">

            </Table>
            <Space h='xl' />
            <Accordion>
                {data.map((property, i) => (
                    <Accordion.Item value={property.id}>
                        <Accordion.Control sx={{ backgroundColor: theme.colors.gray[4], borderRadius: 10 }}>
                            <Text weight={600}>
                                {property.property}
                            </Text>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                                <thead>
                                    <tr>
                                        <th style={{ width: 40 }}>
                                            <Checkbox
                                                onChange={toggleAll}
                                                checked={selection.length === data.length}
                                                indeterminate={selection.length > 0 && selection.length !== data.length}
                                                transitionDuration={0}
                                            />
                                        </th>
                                        <th>Name</th>
                                        <th>Interested Unit</th>
                                        <th>Status</th>
                                        <th>Contacts</th>
                                    </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </Table>
                        </Accordion.Panel>
                        <Space h='xl' />
                    </Accordion.Item>
                ))}
            </Accordion>
        </ScrollArea>
    );
}