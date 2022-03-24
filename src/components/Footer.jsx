import * as React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            padding="16px 0" 
            borderTop="1px solid hsl(0, 0%, 82%)"
            display="flex"
            justifyContent="center"
        >
            {'© Me :)'}
        </Box>
    )
};

export default Footer;