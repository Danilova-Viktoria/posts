import * as React from "react";
import { CreatePost } from "../components/Post";
import MainLayout from "../layout/MainLayout";

const PostView = () => {
  return (
    <MainLayout name="Create New Post">
      <CreatePost/>
    </MainLayout>
  );
};

export default PostView;
