import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      const postsQuery = query(
        collection(db, "posts"),
        where("userId", "==", user.uid)
      );
      const postDocs = await getDocs(postsQuery);
      setMyPosts(postDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    if (user) fetchMyPosts();
  }, [user]);

  return (
    <div className="profile-container">
      <h2>{user?.displayName}'s Profile</h2>
      <img src={user?.photoURL} alt="Profile" />
      {myPosts.map(post => (
        <div key={post.id} className="post">
          <p>{post.text}</p>
          {post.images?.map((img, index) => (
            <img key={index} src={img} alt="Post content" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Profile;
