import axios from "axios";
import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";
import PostList from "./PostList";

const Users = () => {
  const url = "http://localhost:3000/users";
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const deleteclick = (id) => {
    let usersId = users.filter((el) => el.id !== id);
    // let delUser = axios.delete(usersId);
    console.log(usersId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, users);
      console.log(res.data);
      fetchPosts();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <AddPost
        users={users}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h1 className="m-3">Post Lists</h1>
      <PostList users={users} error={error} deleteclick={deleteclick} />
    </div>
  );
};

export default Users;
