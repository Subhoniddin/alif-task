import { NavLink } from "react-router-dom";
import SearchInput from "../Search/SearchInput";
import "./Header.css";
const Header = () => {
  return (
    <header className="main_header">
      <div className="header-wrapper">
        <div className="header_item">
          <NavLink to="/home">
            <span className="span">Home</span>
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/posts">
            <span className="span">Posts</span>
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/users">
            <span className="span">Users</span>
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/photos">
            <span className="span">Photos</span>
          </NavLink>
        </div>
      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
