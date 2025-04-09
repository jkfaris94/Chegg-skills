import { Link, useParams } from "react-router-dom";
import { capitalizePostTitle } from "../../util/helpers";

function UserPosts({ users }) {
  const { userId } = useParams();
  const currentUser = users.find(({ id }) => id === userId) || {};

  const postLinks = currentUser.posts.map((post) => (
    <Link
      to={post.id}
      key={post.id}
      className="list-group-item list-group-item-action"
    >
      {capitalizePostTitle(post.title)}
    </Link>
  ));

  return (
    <div className="row">
      <aside className="col-5">
        <ul className="list-group">
          <li className="list-group-item list-group-item-primary">
            <strong>All Posts</strong>
          </li>
          {postLinks}
        </ul>
      </aside>
      <section className="col-7"></section>
    </div>
  );
}

export default UserPosts;
