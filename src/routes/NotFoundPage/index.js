import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="Container">
      <h1 className="Heading">Page not found!</h1>
      <p className="Text">
        It seems that you have lost yourself. Don't worry! You can come back to
        our{" "}
        <Link to="/" className="Link-home">
          Home
        </Link>
        .
      </p>
      <Link to="/" className="Link-home">
        <img
          src="https://files.fm/thumb_show.php?i=m58wsxgf5x"
          alt="Lost"
          className="Image"
        />
      </Link>
    </div>
  );
};

export { NotFound };
