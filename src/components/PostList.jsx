import * as React from 'react';
import { Grid } from '@mui/material';
import Post from './Post';

const PostList = ({ data }) => {

    const posts = data.map((postData) => (
        <Grid key={postData._id} item xs={4}>
            <Post data={postData} />
        </Grid>
    ));

    return (
        <Grid container spacing={2}>
            {posts}
        </Grid>
    )
}

export default PostList;