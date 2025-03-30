import React from 'react';
// function Content({ loggedIn }) {
//     return loggedIn && <p>Your Gay</p>;
//   }

function Content({ fontSize }) {
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <p>This is the content area. The font size can change!</p>
    </div>
  );
}


  export default Content;