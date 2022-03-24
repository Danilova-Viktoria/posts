import { Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const CustomAvatar = ({data}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
        }}>
            <Avatar sx={{ bgColor: '#ccc' }}>
                <PersonIcon />
            </Avatar>
            <Typography variant="subtitle2">{data.email}</Typography>
        </Box>
    )
};

export default CustomAvatar;