import * as React from "react";
import { LinearProgress } from "@mui/material";
import { Post } from "../components/Post";
import useGetPostById from "../hooks/useGetPostById";
import MainLayout from "../layout/MainLayout";

const PostView = () => {
  const { post, loading, error } = useGetPostById();

  return (
    <MainLayout name={post?.title}>
      {loading ? <LinearProgress /> : <Post data={post} error={error} />}
    </MainLayout>
  );
};

export default PostView;
