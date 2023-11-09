/* eslint-disable react/prop-types */

import "./_Header.scss";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="md:container md:mx-auto ">
        <h1 className="mb-5 text-center text-4xl">Books Head</h1>
        <div className="text-content mx-5">
          <p className="mb-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit
            lectus enim id euismod. Gravida at praesent aliquam, at natoque at
            leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate
            magna.
          </p>
        </div>
        <div className="btn">
          <NavLink to="/admin">Now Read!</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
