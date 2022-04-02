import {useState} from 'react';
import { Grid, Pagination } from '@mui/material';
import { PostCard } from './Post';


const PostList = ({ data }) => {
    const postsPerPage = 6;
    const pageCount = data.length/postsPerPage;
    const [currentPage, setCurrentPage] = useState(1);
    const handleChange = (e, pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const posts = data.slice((currentPage-1)*postsPerPage, currentPage*postsPerPage).map((postData) => (
        <Grid key={postData._id} item xs={4}>
            <PostCard data={postData} />
        </Grid>
    ));

    return (
        <>
            <Grid container spacing={2}>
                {posts}
            </Grid>
            <Pagination count={pageCount} onChange={handleChange} page={currentPage} variant="outlined" shape="rounded" />
        </>
    )
}

export default PostList;