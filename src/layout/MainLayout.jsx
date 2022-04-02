import * as React from 'react';
import { Container, Box } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children, name }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Container disableGutters sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 0',
                gap: '8px',
                flex: "1 1 100%",
            }}>
                <Header name={name}/>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default MainLayout;