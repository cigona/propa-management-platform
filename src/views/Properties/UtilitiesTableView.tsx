import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Space, Badge } from '@mantine/core';
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

export function UtilitiesTableView({ data }: TableSelectionProps) {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
                <td>
                    <Checkbox
                        checked={selection.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Text size="md" weight={600}>
                            {item.property}
                        </Text>
                    </Group>
                    <Text color='gray' size="sm" weight={400}>
                        123 Property Address
                    </Text>
                </td>
                <td><Text color='dark' size="sm" weight={500}>Water</Text></td>
                <td><Text color='dark' size="sm" weight={500}>Ksh. {item.expenses}</Text></td>
                <td><Text color='dark' size="sm" weight={500}>05 Jan 2023</Text></td>
                <td><Badge color='green'>Paid</Badge></td>
            </tr>
        );
    });

    return (
        <ScrollArea>
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
                        <th>Property</th>
                        <th>Tag</th>
                        <th>Amount</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}