import { Box, Link, Typography } from '@mui/material';
import CustomAvatar from './CustomAvatar';
import CustomTimeline from './CustomTimeline';
import Tags from './Tags';

const Post = ({ data }) => {
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            borderRadius: '2px',
        }}>
            <Box sx={{ 
                overflow: 'hidden',
                padding: '16px 24px',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
            }}>
                <Link href={`https://react-learning.ru/posts/${data._id}`} sx={{
                    fontWeight: '500',
                    color: '#1890ff',
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    cursor: 'pointer',
                }}>
                    {data.title}
                </Link>
            </Box>
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px', 
                borderTop: '1px solid #f0f0f0'
            }}>
                <CustomAvatar data={data.author}/>
                <Typography sx={{
                    fontSize: '14px',
                    color: 'rgba(0, 0, 0, 0.85)',
                }}>{data.text}</Typography>
                <Tags data={data.tags}/>
                <CustomTimeline data={data}/>
            </Box>
        </Box>
    )
}

export default Post;