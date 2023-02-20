import { Center, TextInput, useMantineTheme } from '@mantine/core'

import React from 'react'
import { PhosphorLogo } from 'phosphor-react';

type props = {
    label: string;
    placeholder?: string;
    type? : string
    name?: string
    onBlur?: (e: any) => void
    onChange?: (e: any) => void
    withAsterisk?: boolean
}
function StyledTextInput({label, placeholder, type, name, onBlur, withAsterisk, onChange}: props) {
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
            />
        </div>
    )
}

export default StyledTextInput