import { Space, useMantineTheme } from "@mantine/core"
import { ReactNode } from "react"


type props = {
    children: ReactNode
}

function TopBorderContainer({ children }: props) {
    const theme = useMantineTheme();
    return (
        <div style={{ marginBlock: 16, borderTop: `1px solid ${theme.colors.gray[3]}`, padding: 32 }}>
            <Space h='xl' />
            {children}
        </div>
    )
}

export default TopBorderContainer