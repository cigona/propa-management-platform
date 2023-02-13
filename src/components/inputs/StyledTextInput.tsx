import { Center, TextInput, useMantineTheme } from '@mantine/core'
import React from 'react'

type props = {
    label: string;
    placeholder?: string;
    type? : string
}
function StyledTextInput({label, placeholder, type}: props) {
    const theme = useMantineTheme();
    return (
        <div style={{ backgroundColor: theme.colors.gray[1], padding: 8, width: '100%', borderRadius: 10 }}>
            <TextInput
                placeholder={placeholder}
                label={label}
                variant="filled"
                type={type ? type : 'text'}
                sx={{
                    '.mantine-TextInput-input:focus': {
                        borderColor: theme.colors.gray[1]
                    }
                }}
            />
        </div>
    )
}

export default StyledTextInput