import React from "react";
import "./Links.scss";

function InternalLinks({ internalLinks, searchURL }) {
  const displayLinks =
    internalLinks && internalLinks.length > 0
      ? internalLinks.map(link => {
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
      : "No Internal Links";
  return (
    <div>
      <h2>Internal Links</h2>
      <div>{displayLinks}</div>
    </div>
  );
}

export default InternalLinks;
