import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async () => {
    if (!text) return;
    await addDoc(collection(db, "posts"), {
      text,
      images,
      timestamp: serverTimestamp(),
    });
    setText("");
    setImages([]);
  };

  return (
    <div className="create-post-container">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      {/* Add image upload functionality */}
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;
