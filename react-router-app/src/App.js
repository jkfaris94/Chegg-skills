// import Header from "./common/Header";
import User from "./user/User";
import CardList from "./home/CardList";
import { Route, Routes } from "react-router-dom";
// import Card from "./home/Card";
import UserProfile from "./user/UserProfile";
import PostList from "./user/PostList";
import Post from "./user/Post";
import NotFound from "./common/NotFound";
import MainLayout from "./home/MainLayout";
// import PostsNav from "./user/PostsNav";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />} >
          <Route index element={<CardList />} />

          <Route path="users/:userId" element={<User />}>
            {/* <Route index element={<PostsNav />} /> */}
            <Route index element={< UserProfile />} />
            <Route path="posts" element ={<PostList />} >
              <Route path=":postId" element={<Post />} />
              </Route>
          </Route>

          {/* <Route path="users" element={<CardList />}>
            <Route path="card" element={<Card />} />
          </Route> */}

          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;