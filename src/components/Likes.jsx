import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";

const Likes = ({ count, checked, onChange }) => {
  const toggleCheck = () => {
    onChange(!checked);
  };

  return (
    <Box display="flex" flexDirection="row" gap="8px" padding="10px">
      <FavoriteIcon
        sx={{ 
            cursor: 'pointer',
            color: checked ? "red" : "#ccc"
         }}
        onClick={toggleCheck}
      />
      <Typography>{count}</Typography>
    </Box>
  );
};

export default Likes;
