import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPost }) {
  const [type, setType] = useState("text");
  const [content, setContent] = useState("");

  const handleTypeChange = (event) => setType(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({ type, content });
    setType("text");
    setContent("");
    console.log({type, content})
  }
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            value={content}
            required={true} 
            onChange={handleTypeChange}
            >
            <option value="text" >Text</option>
            <option value="image" >Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "text" ? (
            <textarea id="content" name="content" required={true} value={content} rows={3} onChange={handleContentChange}/>
          ) : (
            <input id="content" name="content" type="url" required={true} value={content} onChange={handleContentChange} />
          )}
        </div>
        <br />
        <div>
          <button type="submit" data-testid="formSubmit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
