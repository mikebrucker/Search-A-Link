import React from "react";
import "./Links.scss";

function ExternalLinks({ externalLinks, searchURL }) {
  const displayLinks =
    externalLinks && externalLinks.length > 0
      ? externalLinks.map(link => {
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
      <h2>External Links</h2>
      <div>{displayLinks}</div>
    </div>
  );
}

export default ExternalLinks;
