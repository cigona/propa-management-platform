import { Center, TextInput, useMantineTheme } from '@mantine/core'

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
        <div style={{ backgroundColor: theme.colors.gray[1], padding: 8, width: '100%', borderRadius: 10 }}>
            <TextInput
                placeholder={placeholder}
                label={label}
                variant="filled"
                type={type ? type : 'text'}
                name={name}
                id={name}
                onBlur={onBlur}
                onChange={onChange}
                withAsterisk={withAsterisk}
                error={errors}
            />
        </div>
    )
}

export default StyledTextInput