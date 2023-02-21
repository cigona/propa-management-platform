import { Card, Center, TextInput, useMantineTheme } from '@mantine/core'

import React from 'react'
import { PhosphorLogo } from 'phosphor-react';

type props = {
    label: string;
    placeholder?: string;
    type? : string
    name?: string
    onBlur?: (e: any) => void
    onChange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
    withAsterisk?: boolean
    errors?: string
}
function StyledTextInput({label, placeholder, type, name, onBlur, withAsterisk, onChange, errors}: props) {
    const theme = useMantineTheme();
    return (
        <Card shadow='sm' withBorder sx={{ backgroundColor: 'white', width: '100%', borderRadius: 10 }}>
            <TextInput
                placeholder={placeholder}
                label={label}
                variant="unstyled"
                type={type ? type : 'text'}
                name={name}
                id={name}
                onBlur={onBlur}
                onChange={onChange}
                withAsterisk={withAsterisk}
                error={errors}
                sx={{backgroundColor: 'white', '.mantine-TextInput-label': {
                    // paddingLeft: 16
                }}}
                size='sm'
            />
        </Card>
    )
}

export default StyledTextInput