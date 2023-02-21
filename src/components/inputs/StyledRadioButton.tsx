import { Radio } from '@mantine/core'
import { useMantineTheme } from '@mantine/styles'
import React from 'react'

type props = {
  label: string;
  description: string;
  checked?: boolean;
  onChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  }
  name?: string;
  value?: string;
}

function StyledRadioButton({ label, description, checked, onChange, name, value }: props) {
  const theme = useMantineTheme()

  return (
    <div style={{ padding: 16, borderRadius: 10, border: `1px solid ${checked ? theme.colors.gray[7] : theme.colors.gray[4]}`, minHeight: '12rem', backgroundColor: 'white' }}>
      <Radio
        sx={{
          minHeight: '12rem',
          maxWidth: '14rem',
          '.mantine-Radio-labelWrapper': {
            marginTop: '8rem',
            width: '12rem'
          },
          '.mantine-Radio-label': {
            fontWeight: 600
          }
        }}
        labelPosition="left"
        label={label}
        description={description}
        color="red"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  )
}

export default StyledRadioButton