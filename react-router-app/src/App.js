import Header from "./common/Header";
import User from "./user/User";
import CardList from "./home/CardList";
import { Route, Routes } from "react-router-dom";
import Card from "./home/Card";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:userID" element={<User />}>
            <Route path="posts" element ={<PostList />}>
              <Route path={"posts/:postId"} element={<Post />} />
            </Route>
            <Route index element={< UserProfile/>} />
          </Route>

          <Route path="card-list" element={<CardList />}>
            <Route path="card" element={<Card />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;