import { Box, Typography, LinearProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomAvatar from "../CustomAvatar";
import Tags from "../Tags";
import CustomButton from "../CustomButton";
import CustomDivider from "../CustomDivider";
import useDeletePost from "../../hooks/useDeletePost";
import PostListContext from "../../contexts/postListContext";
import UserContext from "../../contexts/userContext";

const Post = ({ data, error }) => {
  const { deletePost, loading } = useDeletePost(data?._id);
  const { getPosts } = useContext(PostListContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const isPostOwner = user?._id === data?.author._id;

  const handlePostDelete = async () => {
    const shouldDelete = window.confirm(
      `Вы действительно хотите удалить пост?`
    );

    if (shouldDelete) {
      await deletePost();
      await getPosts();
      navigate("/posts");
    }
  };

  const handlePostEdit = () => {
    navigate("edit");
  };

  const handleNavBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (error) {
      navigate("/notfound");
    }
  }, [error]);

  if (!data || error) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {loading && <LinearProgress />}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="600px"
        mb="0.5em"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap="16px">
          <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={handleNavBack} />
          <Typography variant="h6" fontWeight="bold">
            {data.title}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" gap="16px">
          <CustomButton onClick={handlePostEdit}>Edit</CustomButton>
          {isPostOwner && (
            <CustomButton onClick={handlePostDelete}>Delete</CustomButton>
          )}
        </Box>
      </Box>
      <CustomAvatar data={data.author} />
      <CustomDivider />
      <Typography>
        Created at {new Date(data.created_at).toLocaleString()}
      </Typography>
      <Typography>
        Edited at {new Date(data.updated_at).toLocaleString()}
      </Typography>
      <CustomDivider />
      <Typography
        sx={{
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.85)",
        }}
      >
        {data.text}
      </Typography>
      <CustomDivider />
      <Tags data={data.tags} showLabel={false} />
    </Box>
  );
};

export default Post;
