import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({name="Kitty Kat",birthday="January 1",imageSrc="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/f9c0c6f475a7d6d357f070e269501876-ple_profile_page.png",}) {
  return (
    <header>
      <img src={imageSrc} alt="cat" style={{width: "100px", height:"100px"}}/>
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </header>
  );
}

export default Header;