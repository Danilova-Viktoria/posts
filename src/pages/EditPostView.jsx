import * as React from "react";
import { LinearProgress } from "@mui/material";
import { EditPost } from "../components/Post";
import useGetPostById from "../hooks/useGetPostById";
import MainLayout from "../layout/MainLayout";

const EditPostView = () => {
  const { post, loading } = useGetPostById();

  return (
    <MainLayout name={post?.title}>
      {loading ? <LinearProgress /> : <EditPost data={post} />}
    </MainLayout>
  );
};

export default EditPostView;
