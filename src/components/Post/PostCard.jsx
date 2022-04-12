import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import CustomAvatar from "../CustomAvatar";
import CustomTimeline from "../CustomTimeline";
import Tags from "../Tags";
import Likes from "../Likes";
import UserContext from "../../contexts/userContext";
import useTogglePostLike from "../../hooks/useTogglePostLike";
import PostListContext from "../../contexts/postListContext";

const PostCard = ({ data }) => {
  const { user } = useContext(UserContext);
  const { getPosts } = useContext(PostListContext);

  const { togglePostLike, error, loading } = useTogglePostLike(data?._id);
  const onToggleLike = async (isLiked) => {
    await togglePostLike(isLiked);
    await getPosts();
  };

  if (!data) {
    return null;
  }

  return (
    <Box
      sx={{
        border: "1px solid #f0f0f0",
        borderRadius: "2px",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          padding: "16px 24px",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        <Link
          style={{
            fontWeight: "500",
            color: "#1890ff",
            textDecoration: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
          }}
          to={`/posts/${data._id}`}
        >
          {data.title}
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <CustomAvatar data={data.author} />
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(0, 0, 0, 0.85)",
          }}
        >
          {data.text}
        </Typography>
        <Tags data={data.tags} />
        <CustomTimeline data={data} />
      </Box>
      <Box>
        <Likes
          count={data.likes.length}
          checked={data.likes.includes(user._id)}
          onChange={onToggleLike}
        />
      </Box>
    </Box>
  );
};

export default PostCard;
