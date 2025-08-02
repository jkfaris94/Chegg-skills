import React from "react";

function Content({ loggedIn, fontSize }) {
  return ( loggedIn && (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>CONTENT</p>
    </div>
    )
  );
}

export default Content;