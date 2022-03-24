import * as React from 'react';
import { Container } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Container disableGutters sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 0',
                gap: '8px',
            }}>
                <Header />
                {children}
            </Container>
            <Footer />
        </>
    );
}

export default MainLayout;