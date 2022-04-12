import { Typography, Box, LinearProgress } from "@mui/material";
import { useContext } from "react";
import CustomButton from "../components/CustomButton";
import PostList from "../components/PostList";
import UserContext from "../contexts/userContext";
import PostListContext from "../contexts/postListContext";
import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";

const PostListView = () => {
  const { user } = useContext(UserContext);
  const { posts, loading } = useContext(PostListContext);
  const navigate = useNavigate();

  const handlePostCreateButtonClick = () => {
    navigate("create");
  };

  return (
    <MainLayout>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="16px">
        <Box>
          <Typography mb="16px" variant="h6" fontWeight="bold">
            Welcome to my Image Board!
          </Typography>
          <Typography mb="16px" fontSize="14px">
            {user?.name}, {user?.about}
          </Typography>
        </Box>
        {loading && <LinearProgress sx={{
          flex: 1
        }}/>}
        <CustomButton onClick={handlePostCreateButtonClick}>
          Create post
        </CustomButton>
      </Box>
      <PostList data={posts} />
    </MainLayout>
  );
};

export default PostListView;
