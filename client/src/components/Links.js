import React from "react";
import "./Links.scss";

function Links({ type, links, searchURL }) {
  const displayLinks =
    links && links.length > 0
      ? links.map(link => {
          return (
            <div
              className="link"
              key={link._id}
              onClick={searchURL.bind(this, link.link)}
            >
              {link.link}
            </div>
          );
        })
      : "No External Links";

  return (
    <div>
      <h2>{type} Links</h2>
      <div>{displayLinks}</div>
    </div>
  );
}

export default Links;
