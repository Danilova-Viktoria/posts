import { Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";
import PostListContext from "./contexts/postListContext";
import { PostListView, PostView } from "./pages";
import useGetUserInfo from './hooks/useGetUserInfo';
import useGetPosts from "./hooks/useGetPosts";

const App = () => {
  const user = useGetUserInfo();
  const postsData = useGetPosts();
  return (
    <UserContext.Provider value={user}>
      <PostListContext.Provider value={postsData}>
        <Routes>
            <Route index path="posts" exact element={<PostListView />} />
            <Route path="posts/:id" element={<PostView />} />
        </Routes>
      </PostListContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
