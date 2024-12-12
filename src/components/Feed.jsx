import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs, startAfter } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "desc"), limit(20));
    const postDocs = await getDocs(postsQuery);
    const fetchedPosts = postDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(fetchPosts)
    setPosts(fetchedPosts);
    setLastDoc(postDocs.docs[postDocs.docs.length - 1]);
    setLoading(false);
  };

  const fetchMorePosts = async () => {
    if (!lastDoc) return;
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      startAfter(lastDoc),
      limit(20)
    );
    const postDocs = await getDocs(postsQuery);
    const fetchedPosts = postDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(prev => [...prev, ...fetchedPosts]);
    setLastDoc(postDocs.docs[postDocs.docs.length - 1]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.text}</p>
          {post.images?.map((img, index) => (
            <img key={index} src={img} alt="Post content" />
          ))}
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <button onClick={fetchMorePosts}>Load More</button>
    </div>
  );
};

export default Feed;
