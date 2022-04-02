import * as React from "react";
import { Post } from "../components/Post";
import useGetPostById from "../hooks/useGetPostById";
import MainLayout from "../layout/MainLayout";

const PostView = () => {
  const { post } = useGetPostById();

  return (
    <MainLayout name={post?.title}>
      <Post data={post}/>
    </MainLayout>
  );
};

export default PostView;
