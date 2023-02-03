import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Space } from '@mantine/core';
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

export function OverviewTableView({ data }: TableSelectionProps) {
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
                        <Text size="md" weight={800}>
                            {item.property}
                        </Text>
                    </Group>
                    <Text color='gray' size="sm" weight={400}>
                        123 Property Address
                    </Text>
                </td>
                <td>Ksh. {item.grossIncome}</td>
                <td>Ksh. {item.expenses}</td>
                <td>Ksh. {item.netIncome}</td>
                <td>Ksh. {item.outstandingRent}</td>
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
                        <th>Gross Income</th>
                        <th>Expenses</th>
                        <th>Net Income</th>
                        <th>Outstanding Balance</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}