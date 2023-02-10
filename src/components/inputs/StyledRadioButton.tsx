import { Radio } from '@mantine/core'
import { useMantineTheme } from '@mantine/styles'
import React from 'react'

type props = {
    label: string;
    description: string;
    checked?: boolean
}

function StyledRadioButton({label, description, checked}: props) {
    const theme = useMantineTheme()

  return (
    <div style={{ padding: 16, borderRadius: 10, border: `1px solid ${theme.colors.gray[6]}`, minHeight: '6rem' }}>
                            <Radio
                                labelPosition="left"
                                label={label}
                                description={description}
                                color="red"
                            />
                        </div>
  )
}

export default StyledRadioButton