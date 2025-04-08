import React, { useEffect, useState } from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);

  
  useEffect(() => {
    if (!user.id) return;

    const abortController = new AbortController(); //create new AbortController
    //code want to run
    async function loadAlbums() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
          { signal : abortController.signal } //pass abort
        );
        const userAlbums = await response.json();
        setAlbums(userAlbums);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", user.id);
        } else {
          throw error;
        }
      }
    }

    loadAlbums();
    //return function

    return () => {
      console.log("cleanup", user.id);
      abortController.abort();
    };
  }, [user.id]); //dependency array

  if (!user.id) {
    return <p>Please click on a user name to the left</p>;
  }

  return (
    <div>
      <h2>Albums for {user.name}</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default AlbumList;
