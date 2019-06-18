import React from "react";
import "./Searchbar.scss";

function Searchbar({ link, handleChange, handleSubmit }) {
  return (
    <form className="Searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="link"
        value={link}
        onChange={handleChange}
        placeholder="Search URL"
      />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Searchbar;
