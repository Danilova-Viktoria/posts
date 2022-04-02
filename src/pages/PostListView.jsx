import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import CustomButton from "../components/CustomButton";
import PostList from "../components/PostList";
import UserContext from "../contexts/userContext";
import PostListContext from "../contexts/postListContext";
import MainLayout from "../layout/MainLayout";

const PostListView = () => {

  const user = useContext(UserContext);
  const { posts }= useContext(PostListContext);

  const handlePostCreateButtonClick = () => {
      console.log('Есть контакт');
  }

  return (
    <MainLayout>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography mb="16px" variant="h6" fontWeight="bold">
            Welcome to my Image Board!
          </Typography>
          <Typography mb="16px" fontSize="14px">
            {user?.name}, {user?.about}
          </Typography>
        </Box>
        <CustomButton onClick={handlePostCreateButtonClick}>Create post</CustomButton>
      </Box>
      <PostList data={posts} />
    </MainLayout>
  );
};

export default PostListView;
