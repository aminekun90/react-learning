import { Link } from "react-router-dom";
function MainNavigation(params) {
  return (
    <header>
      <div>React Learning</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li>
            <Link to="/myTodos">My To Dos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
