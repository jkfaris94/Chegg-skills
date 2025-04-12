import Header from "./common/Header";
import User from "./user/User";
import CardList from "./home/CardList";
import { Route, Routes } from "react-router-dom";
import Card from "./home/Card";
import PostsNav from "./user/PostsNav";
import PostLink from "./user/PostLink";
import UserProfile from "./user/UserProfile";
import PostList from "./user/PostList";
import Post from "./user/Post";

function HomePage() {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
}


function App() {
  return (
      <div>
        <Routes>
          <Route path="header" element={<Header />} />
          <Route path="/" element={<HomePage />} />
          <Route path="user" element={<User />}>
            <Route path="posts-nav" element={<PostsNav/>} />
            <Route path="post-list" element ={<PostList />}>
              <Route path="post-link" element={<PostLink />} />
              <Route path=":id" element={<Post />} />
            </Route>
            <Route path="user/:id" element={< UserProfile/>} />
          </Route>
          <Route path="card-list" element={<CardList />}>
            <Route path="card" element={<Card />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;