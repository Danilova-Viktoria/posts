import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CustomAvatar from "../CustomAvatar";
import Tags from "../Tags";
import CustomButton from "../CustomButton";
import CustomDivider from "../CustomDivider";
import useDeletePost from "../../hooks/useDeletePost";
import PostListContext from "../../contexts/postListContext";

const Post = ({ data }) => {

  const deletePost = useDeletePost();
  const { getPosts } = useContext(PostListContext);
  const navigate = useNavigate();

  const handlePostDelete = async () => {
    const shouldDelete = window.confirm(`Вы действительно хотите удалить пост?`);

    if (shouldDelete) {
      await deletePost(data._id);
      await getPosts();
      navigate('/posts');
    }
  }

  if (!data) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="600px"
        mb="0.5em"
      >
        <Typography variant="h6" fontWeight="bold">
          {data.title}
        </Typography>
        <CustomButton>Edit</CustomButton>
        <CustomButton onClick={handlePostDelete}>Delete</CustomButton>
      </Box>
      <CustomAvatar data={data.author} />
      <CustomDivider />
      <Typography>Created at {new Date(data.created_at).toLocaleString()}</Typography>
      <Typography>Edited at {new Date(data.updated_at).toLocaleString()}</Typography>
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
