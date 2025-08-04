import { useState } from "react";

function PostComments({ postId }) {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);


    const handleClick = () => {
        if (!show) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error("there was an error fetching comments", error)
            );
        }
        setShow(!show);
    };


    return (
        <>
            <button onClick={handleClick}>{show ? "hide Comments" : "Show Comments"}</button>
            {show &&
            comments.map((comment) => (
            <div key={comment.id}>
                <h2>{comment.email}</h2>
                <p>{comment.body}</p>
            </div>
            ))}
        </>

    )

}

export default PostComments;