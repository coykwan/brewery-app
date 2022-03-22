import { Container } from "@mui/material"

export const Layout: React.FC = ({children}) => {
    return (
        <Container maxWidth="sm">
            {children}
        </Container>
    )
} 