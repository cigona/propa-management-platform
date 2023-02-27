import { Card, Center, Select, TextInput, useMantineTheme } from '@mantine/core'

import React from 'react'
import { PhosphorLogo } from 'phosphor-react';

type props = {
    label: string;
    placeholder?: string;
    name?: string
    onBlur?: (e: any) => void
    onChange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
    withAsterisk?: boolean
    errors?: string,
    data: { value: string, label: string }[]
    disabled?: boolean
}
function StyledSelectInput({ label, placeholder, name, onBlur, withAsterisk, onChange, errors, data, disabled }: props) {

    return (

        <Select
            placeholder={placeholder}
            label={label}
            variant="unstyled"
            name={name}
            id={name}
            onBlur={onBlur}
            onChange={onChange}
            withAsterisk={withAsterisk}
            error={errors}
            disabled={disabled}
            searchable
            nothingFound="No options"
            sx={{
                backgroundColor: 'white', 
                padding: 16,
                boxShadow: '0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px',
                borderRadius: 10,
                border: `1px solid #dee2e6`
            }}
            size='sm' data={data} />
    )
}

export default StyledSelectInput