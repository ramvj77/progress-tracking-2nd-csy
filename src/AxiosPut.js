import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        userId: 1,
        id: 1,
        title: 'New Title',
        body: 'New Body Text',
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
  }, []);

  return (
    <div>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;