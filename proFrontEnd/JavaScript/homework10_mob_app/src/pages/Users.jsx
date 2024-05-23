import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const users = () => {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const fetchPosts = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await res.json();

    setData(users);
  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchPosts();
}, []);

if (isLoading) {
  return <h1>Loading ...</h1>;
}

  return (
    <div className="users">
      {data &&
        data.map((item) => (
          <div className="item" key={item.id}>
            <Link to={`/users/${item.id}`}>
              {item.name}
            </Link>
            <p>{item.phone}</p>
          </div>
        ))}
    </div>
  );
}

export default users
