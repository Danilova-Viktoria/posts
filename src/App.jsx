import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import UserContext from "./contexts/userContext";
import PostListContext from "./contexts/postListContext";
import {
  PostListView,
  PostView,
  CreatePostView,
  EditPostView,
  NotFoundView,
} from "./pages";
import useGetUserInfo from "./hooks/useGetUserInfo";
import useGetPosts from "./hooks/useGetPosts";

const App = () => {
  const userState = useGetUserInfo();
  const postsState = useGetPosts();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("posts");
    }
  }, [location]);

  return (
    <UserContext.Provider value={userState}>
      <PostListContext.Provider value={postsState}>
        <Routes>
          <Route path="posts" exact element={<PostListView />} />
          <Route path="posts/create" element={<CreatePostView />} />
          <Route path="posts/:id" element={<PostView />} />
          <Route path="posts/:id/edit" element={<EditPostView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </PostListContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
