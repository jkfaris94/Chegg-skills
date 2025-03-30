import React from 'react';
  //function Header( {loggedIn, handleLoggedInClick, handleFontSizeIncrease })
function Header( {handleFontSizeIncrease }) {
    return (
      //<button onClick={handleLoggedInClick}>{loggedIn ? "Log Out" : "Log In"}</button>
      <button onClick={handleFontSizeIncrease}>Increase Font Size</button>
    );
  }
  
export default Header;