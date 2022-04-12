import { Box, Typography, TextField, LinearProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import PostListContext from "../../contexts/postListContext";
import useCreatePost from "../../hooks/useCreatePost";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreatePost = () => {
  const { getPosts } = useContext(PostListContext);
  const navigate = useNavigate();
  const {createPost, error, loading } = useCreatePost();

  const handlePostCreate = async (data) => {
    const post = await createPost(data);

    if (post) {
      await getPosts();
      navigate(`/posts/${post._id}`);
    }
  };

  const form = useFormik({
    initialValues: {
      title: "",
      text: "",
      image: "",
      tags: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Обязательное поле"),
      text: Yup.string().required("Обязательное поле"),
      image: Yup.string().url("Укажите валидный URL"),
    }),
    onSubmit: handlePostCreate,
    validateOnMount: false,
    validateOnBlur: true,
  });

  const handleNavBack = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" flexDirection="column" gap="16px">
      {loading && <LinearProgress />}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        width="600px"
        gap="16px"
        mb="0.5em"
      >
        <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={handleNavBack} />
        <Typography variant="h6" fontWeight="bold">
          Create new post
        </Typography>
      </Box>
      <TextField
        name="title"
        value={form.values.title}
        error={Boolean(form.errors.title)}
        label="Title"
        helperText={form.errors.title}
        onChange={form.handleChange}
      />
      <TextField
        name="text"
        value={form.values.text}
        error={Boolean(form.errors.text)}
        label="Text"
        helperText={form.errors.text}
        multiline
        onChange={form.handleChange}
      />
      <TextField
        name="image"
        value={form.values.image}
        error={Boolean(form.errors.image)}
        label="Image URL"
        helperText={form.errors.image}
        onChange={form.handleChange}
      />
      <TextField
        name="tags"
        value={form.values.tags}
        error={Boolean(form.errors.tags)}
        placeholder="legendary, epic, post"
        label="Tags (separated by comma)"
        helperText={form.errors.tags}
        onChange={form.handleChange}
      />
      <CustomButton width="100px" onClick={form.handleSubmit}>
        Create
      </CustomButton>
    </Box>
  );
};

export default CreatePost;
