import { Box, Typography, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import PostListContext from "../../contexts/postListContext";
import useEditPost from "../../hooks/useEditPost";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditPost = ({ data }) => {
  const { getPosts } = useContext(PostListContext);
  const navigate = useNavigate();
  const editPost = useEditPost();

  const handlePostEdit = async (editedData) => {
    const post = await editPost(data._id, editedData);
    
    if (post) {
      await getPosts();
      navigate(`/posts/${post._id}`);
    }
  };

  const initialValues = useMemo(() => ({
    title: data?.title || "",
    text: data?.text || "",
    image: data?.image || "",
    tags: data?.tags.join(', ') || "",
  }), [data]);

  const form = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Обязательное поле"),
      text: Yup.string().required("Обязательное поле"),
      image: Yup.string().url("Укажите валидный URL"),
    }),
    onSubmit: handlePostEdit,
    validateOnMount: false,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const handleNavBack = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" flexDirection="column" gap="16px">
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
          Edit post: {data?.title}
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
        Save
      </CustomButton>
    </Box>
  );
};

export default EditPost;
