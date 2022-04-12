import { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { PostCard } from "./Post";

const PostList = ({ data, colors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const pageCount = Math.ceil(data.length / postsPerPage);

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  const posts = data
    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
    .map((postData) => (
      <Grid key={postData._id} item xs={4}>
        <PostCard data={postData} colors={colors} />
      </Grid>
    ));

  return (
    <>
      <Grid container spacing={2}>
        {posts}
      </Grid>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </>
  );
};

export default PostList;
