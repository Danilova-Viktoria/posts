import { Typography, Box } from "@mui/material";
import * as React from "react";
import CustomButton from "../components/CustomButton";
import PostList from "../components/PostList";
import MainLayout from "../layout/MainLayout";
import { postData } from "../mocks/posts";

const Posts = () => {

  const handlePostCreateButtonClick = () => {
      console.log('Есть контакт');
  }

  return (
    <MainLayout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography mb="16px" variant="h6" fontWeight="bold">
            Welcome to Our Image Board!
          </Typography>
          <Typography mb="16px" fontSize="14px">
            We're stoked that you're here. 🥳
          </Typography>
        </Box>
        <CustomButton onClick={handlePostCreateButtonClick}>Create post</CustomButton>
      </Box>
      <PostList data={postData} />
    </MainLayout>
  );
};

export default Posts;
