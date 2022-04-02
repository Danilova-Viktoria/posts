import * as React from 'react';
import { Chip, Stack, Typography } from '@mui/material';

const Tags = ({ data, showLabel = true }) => {

    const tags = data.map((tag) => (
        <Chip key={tag} label={tag} variant="outlined"/>
    ))

    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            {showLabel && <Typography color="rgba(0, 0, 0, 0.85)" fontSize="14px">Tags:</Typography>}
            {tags}
        </Stack>
    )
};

export default Tags;