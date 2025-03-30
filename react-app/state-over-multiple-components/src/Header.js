function Header() {
    // TODO: define loggedIn
    return (
      <button onClick={TODO}>{loggedIn ? "Log Out" : "Log In"}</button>
    );
  }
  
export default Header;